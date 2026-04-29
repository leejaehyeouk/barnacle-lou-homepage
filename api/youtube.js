const CHANNEL_HANDLE = 'barnaclelou6561'
const BASE = 'https://www.googleapis.com/youtube/v3'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=86400')

  const apiKey = process.env.YOUTUBE_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'YOUTUBE_API_KEY 환경변수가 없습니다.' })
  }

  try {
    // 1. 채널 ID + 구독자 수 조회
    const chRes = await fetch(
      `${BASE}/channels?part=id,statistics&forHandle=${CHANNEL_HANDLE}&key=${apiKey}`
    )
    const chData = await chRes.json()

    if (!chData.items?.length) {
      return res.status(404).json({ error: '채널을 찾을 수 없습니다.' })
    }

    const channelId = chData.items[0].id
    const stats = chData.items[0].statistics

    // 2. 최신 영상 12개 조회
    const searchRes = await fetch(
      `${BASE}/search?part=snippet&channelId=${channelId}&maxResults=12&order=date&type=video&key=${apiKey}`
    )
    const searchData = await searchRes.json()

    if (!searchData.items?.length) {
      return res.status(200).json({ videos: [], channel: null })
    }

    // 3. 조회수 조회
    const videoIds = searchData.items.map((v) => v.id.videoId).join(',')
    const statsRes = await fetch(
      `${BASE}/videos?part=statistics&id=${videoIds}&key=${apiKey}`
    )
    const statsData = await statsRes.json()

    const videos = searchData.items.map((v) => {
      const videoStats = statsData.items?.find((s) => s.id === v.id.videoId)
      return {
        id: v.id.videoId,
        title: v.snippet.title,
        thumbnail:
          v.snippet.thumbnails.high?.url ||
          v.snippet.thumbnails.medium?.url ||
          v.snippet.thumbnails.default?.url,
        publishedAt: v.snippet.publishedAt,
        views: parseInt(videoStats?.statistics?.viewCount || '0', 10),
        url: `https://www.youtube.com/watch?v=${v.id.videoId}`,
      }
    })

    return res.status(200).json({
      videos,
      channel: {
        id: channelId,
        subscriberCount: parseInt(stats.subscriberCount || '0', 10),
        videoCount: parseInt(stats.videoCount || '0', 10),
        viewCount: parseInt(stats.viewCount || '0', 10),
      },
    })
  } catch (err) {
    console.error('[youtube api] 오류:', err.message)
    return res.status(500).json({ error: err.message })
  }
}
