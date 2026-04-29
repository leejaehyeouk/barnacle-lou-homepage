const STORE_SLUG = 'olivefriendsshop'
const STORE_BASE = `https://smartstore.naver.com/${STORE_SLUG}`

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  // 30분 캐시 (스마트스토어 상품은 자주 바뀌지 않음)
  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=86400')

  try {
    const response = await fetch(`${STORE_BASE}/products`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8',
        Referer: 'https://smartstore.naver.com/',
      },
      signal: AbortSignal.timeout(10000),
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const html = await response.text()
    const products = parseProducts(html)

    return res.status(200).json({ products, source: 'live', count: products.length })
  } catch (err) {
    console.error('[products api] fetch error:', err.message)
    return res.status(200).json({ products: [], source: 'error', error: err.message })
  }
}

// ────────────────────────────────────────────────
// HTML 파싱
// ────────────────────────────────────────────────

function parseProducts(html) {
  // 전략 1: Next.js __NEXT_DATA__ (가장 안정적)
  const nextDataMatch = html.match(
    /<script id="__NEXT_DATA__"[^>]*type="application\/json"[^>]*>([\s\S]+?)<\/script>/
  )
  if (nextDataMatch) {
    try {
      const data = JSON.parse(nextDataMatch[1])
      const list = deepFindProductList(data)
      if (list.length > 0) return list
    } catch (_) {}
  }

  // 전략 2: window.__STATE__ 또는 window.__PRELOADED_STATE__
  for (const varName of ['__STATE__', '__PRELOADED_STATE__', '__INITIAL_STATE__']) {
    const match = html.match(new RegExp(`window\\.${varName}\\s*=\\s*({[\\s\\S]+?});\\s*(?:window|<\\/script)`))
    if (match) {
      try {
        const data = JSON.parse(match[1])
        const list = deepFindProductList(data)
        if (list.length > 0) return list
      } catch (_) {}
    }
  }

  return []
}

// 재귀적으로 상품 배열을 탐색
function deepFindProductList(obj, depth = 0) {
  if (depth > 10 || !obj || typeof obj !== 'object') return []

  if (Array.isArray(obj)) {
    // 첫 번째 요소가 상품처럼 생겼으면 처리
    if (
      obj.length > 0 &&
      obj[0] &&
      typeof obj[0] === 'object' &&
      (obj[0].productNo || obj[0].channelProductNo || obj[0].productId || obj[0].mallProductId)
    ) {
      return obj.slice(0, 24).map(normalizeProduct).filter(Boolean)
    }
    for (const item of obj.slice(0, 10)) {
      const found = deepFindProductList(item, depth + 1)
      if (found.length > 0) return found
    }
  } else {
    // 우선순위 높은 키 먼저 탐색
    const priorityKeys = ['productList', 'products', 'items', 'list', 'productDetailList']
    for (const key of priorityKeys) {
      if (obj[key]) {
        const found = deepFindProductList(obj[key], depth + 1)
        if (found.length > 0) return found
      }
    }
    for (const key of Object.keys(obj)) {
      if (priorityKeys.includes(key)) continue
      const found = deepFindProductList(obj[key], depth + 1)
      if (found.length > 0) return found
    }
  }

  return []
}

function normalizeProduct(item) {
  const id =
    item.productNo ||
    item.channelProductNo ||
    item.productId ||
    item.mallProductId ||
    item.id

  const name = item.name || item.productName || item.channelProductName || item.title

  const price =
    item.salePrice ||
    item.price ||
    item.discountedSalePrice ||
    item.benefitPrice ||
    item.consumerPrice

  const imageUrl =
    item.representativeImageUrl ||
    item.thumbnailImageUrl ||
    item.imageUrl ||
    item.mainImageUrl ||
    item.pcImageUrl ||
    (item.images && (item.images[0]?.url || item.images[0]))

  if (!id || !name) return null

  return {
    id: String(id),
    name: String(name),
    price: price ? `${Number(price).toLocaleString('ko-KR')}원` : null,
    imageUrl: imageUrl ? String(imageUrl) : null,
    productUrl: `${STORE_BASE}/products/${id}`,
    isSoldOut: item.stockQuantity === 0 || item.outOfStockFlag === true || item.saleType === 'SOLDOUT',
  }
}
