export const instagramPosts = [
  {
    id: 1,
    bgColor: '#FFF0C8',
    charColor: '#F0A820',
    charName: '루',
    emoji: '🐣',
    caption: '오늘도 따개비 마을엔 맑음! ☀️',
    tags: '#따개비루 #Barnacle_Lou',
    likes: 2847,
  },
  {
    id: 2,
    bgColor: '#FFE4EC',
    charColor: '#E8607A',
    charName: '벨라',
    emoji: '🐰',
    caption: '벨라의 비밀 잠수함 탐험 🚤',
    tags: '#벨라 #상상놀이',
    likes: 3124,
  },
  {
    id: 3,
    bgColor: '#E4EEF8',
    charColor: '#6E8EC8',
    charName: '크루루',
    emoji: '🦋',
    caption: '크루루 오늘도 울었다...💧',
    tags: '#크루루 #울보',
    likes: 4201,
  },
  {
    id: 4,
    bgColor: '#E0F4EA',
    charColor: '#5BC870',
    charName: '잠보',
    emoji: '🐋',
    caption: '잠보 등 위에서 바라본 바다 🌊',
    tags: '#잠보 #따개비마을',
    likes: 1983,
  },
  {
    id: 5,
    bgColor: '#FFF0C8',
    charColor: '#F0A820',
    charName: '루',
    emoji: '🎨',
    caption: '루의 오늘의 상상주머니 열기 🎒',
    tags: '#상상 #루',
    likes: 5630,
  },
]

export const characters = [
  {
    name: 'Lou',
    korName: '루',
    color: '#F0A820',
    lightColor: '#FFF0C8',
    description: '호기심 많고 그림 그리기를 좋아하는 아기 갈매기예요. 자신이 따개비인 줄 알고 따개비 마을에서 살고 있어요.',
    trait: '호기심·창의력',
    emoji: '🐣',
    src: '/assets/lou-hero.png',
  },
  {
    name: 'Bella',
    korName: '벨라',
    color: '#E8607A',
    lightColor: '#FFE4EC',
    description: '똑똑하지만 겁 많은 발명가 토끼예요. 잠수함을 타고 바다를 탐험하는 것을 좋아해요.',
    trait: '발명·탐험',
    emoji: '🐰',
    src: '/assets/bella-hero.png',
  },
  {
    name: 'Kruru',
    korName: '크루루',
    color: '#6E8EC8',
    lightColor: '#E4EEF8',
    description: '팔 같은 귀를 가진 울보 친구예요. 힘이 세고 꽃을 무척 좋아해요.',
    trait: '힘·감수성',
    emoji: '🦋',
    src: '/assets/kruru-hero.png',
  },
  {
    name: 'Jambo',
    korName: '잠보',
    color: '#5BC870',
    lightColor: '#E0F4EA',
    description: '루가 살고 있는 든든한 아기 고래예요. 따개비 마을의 터전이 되어 주는 따뜻한 친구예요.',
    trait: '든든함·평화',
    emoji: '🐋',
    src: null,
  },
  {
    name: 'Pero',
    korName: '페로',
    color: '#9B7E6A',
    lightColor: '#F0E8E0',
    description: '구름을 타고 다니며 아는 것이 많은 신비로운 친구예요. 따개비 마을의 현인이에요.',
    trait: '지혜·신비',
    emoji: '☁️',
    src: null,
  },
]

export const episodes = Array.from({ length: 12 }, (_, i) => {
  const charColors = ['#FFF0C8', '#FFE4EC', '#E4EEF8']
  const charEmojis = ['🐣', '🐰', '🦋']
  const charNames = ['루', '벨라', '크루루']
  const titles = [
    '루의 첫 번째 그림',
    '벨라의 잠수함 대작전',
    '크루루의 눈물꽃',
    '잠보의 꿈속 여행',
    '따개비 마을 대청소',
    '루와 별똥별',
    '벨라의 발명품',
    '크루루와 무지개',
    '페로의 구름 이야기',
    '루의 상상 주머니',
    '바닷속 보물찾기',
    '따개비 마을 축제',
  ]
  return {
    id: i + 1,
    title: titles[i],
    ep: `EP.${String(i + 1).padStart(2, '0')}`,
    bgColor: charColors[i % 3],
    charColor: charColors[i % 3],
    charEmoji: charEmojis[i % 3],
    charName: charNames[i % 3],
    ytUrl: 'https://www.youtube.com/@barnaclelou6561',
    views: Math.floor(Math.random() * 50000 + 5000),
  }
})

export const goods = [
  { id: 1, name: '루 인형 26cm', price: '28,000원', color: '#F0A820', lightColor: '#FFF0C8', emoji: '🧸', badge: 'BEST' },
  { id: 2, name: '벨라 인형 26cm', price: '28,000원', color: '#E8607A', lightColor: '#FFE4EC', emoji: '🐰', badge: 'NEW' },
  { id: 3, name: '크루루 키링', price: '12,000원', color: '#6E8EC8', lightColor: '#E4EEF8', emoji: '🔑', badge: null },
  { id: 4, name: '따개비루 영어 동화책', price: '15,000원', color: '#5BC870', lightColor: '#E0F4EA', emoji: '📚', badge: null },
  { id: 5, name: '루 에코백', price: '18,000원', color: '#F0A820', lightColor: '#FFF0C8', emoji: '👜', badge: null },
  { id: 6, name: '캐릭터 스티커팩', price: '5,000원', color: '#E8607A', lightColor: '#FFE4EC', emoji: '✨', badge: 'HOT' },
  { id: 7, name: '따개비루 퍼즐 (100피스)', price: '22,000원', color: '#6E8EC8', lightColor: '#E4EEF8', emoji: '🧩', badge: null },
  { id: 8, name: '루 머그컵', price: '14,000원', color: '#5BC870', lightColor: '#E0F4EA', emoji: '☕', badge: null },
]

export const licensingCategories = [
  {
    id: 1,
    title: '캐릭터 굿즈',
    icon: '🎁',
    color: '#F0A820',
    lightColor: '#FFF0C8',
    desc: '인형, 키링, 문구류, 생활용품 등 다양한 굿즈 라이센싱을 제공합니다.',
    details: ['완구 및 인형류', '문구·사무용품', '생활잡화·소품', '패션·의류·잡화'],
  },
  {
    id: 2,
    title: '출판·교육',
    icon: '📚',
    color: '#E8607A',
    lightColor: '#FFE4EC',
    desc: '동화책, 교육 교재, 디지털 콘텐츠 등 교육 분야 라이센싱을 제공합니다.',
    details: ['그림책·동화책', '영어 교육 교재', '디지털 콘텐츠', '전자출판(e-Book)'],
  },
  {
    id: 3,
    title: '브랜드 콜라보',
    icon: '🤝',
    color: '#6E8EC8',
    lightColor: '#E4EEF8',
    desc: '식품, 의류, 뷰티 등 다양한 브랜드와의 콜라보레이션을 환영합니다.',
    details: ['식품·음료 패키지', '의류·패션 브랜드', '뷰티·코스메틱', '테마파크·이벤트'],
  },
]

export const processSteps = [
  { step: 1, title: '문의', desc: '이메일 또는 홈페이지를 통해 라이센싱 문의를 보내주세요.', icon: '📩' },
  { step: 2, title: '검토', desc: '올리브스튜디오 팀이 신청 내용을 검토합니다 (영업일 기준 3-5일).', icon: '🔍' },
  { step: 3, title: '협의', desc: '담당자와 세부 조건 및 활용 범위를 협의합니다.', icon: '💬' },
  { step: 4, title: '계약', desc: '계약서 작성 및 라이센스 비용 관련 합의를 진행합니다.', icon: '📋' },
  { step: 5, title: '런칭', desc: '승인된 가이드라인에 따라 제품·서비스를 출시합니다.', icon: '🚀' },
]
