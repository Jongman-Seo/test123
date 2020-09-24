const RecoItems = [
  {
    title: '관련 기사 추천',
    icon: 'best',
    link: 'related',
    description:
      '현재 방문자가 보고 있는 뉴스 본문을 기반으로,\n선택된 뉴스와 관련성이 높은 뉴스를 실시간으로 제공합니다.\n인기 기사와 혼합하여 사용할 수 있는 알고리즘입니다.',
  },
  {
    title: '개인화 기사 추천',
    icon: 'best',
    link: 'personalized',
    description:
      '방문자의 뉴스 읽기 패턴을 분석하여, 관심사를 추출하고,\n이를 바탕으로 개인화된 뉴스를 실시간으로 제공합니다.\n관련 뉴스와 혼합하여 사용할 수 있는 알고리즘입니다.',
  },
  {
    title: '카테고리 베스트 추천',
    link: 'category-best',
    description:
      '미디어의 카테고리별로 가장 인기있는 콘텐츠를 추천합니다.\n방문자가 조회 중인 카테고리에 속한 콘텐츠가 자동으로 추천됩니다.',
  },
  {
    title: '정독 기사 추천',
    link: 'perused',
    description:
      '체류시간, 소비량 등 다양한 지표를 고려해\n방문자들이 꼼꼼하게 읽은 정도를 파악하여 콘텐츠를 추천합니다.',
  },
  {
    title: '시간별 인기 추천',
    icon: 'best',
    link: 'popular-hourly',
    description: '시간별/일별로 인기있는 콘텐츠를 제공합니다.',
  },
  {
    title: 'SNS 인기 기사',
    link: 'popular-sns',
    description:
      'SNS에서 많이 유입된 콘텐츠 목록을 제공하여,\nSNS에서 적극적으로 홍보할 만한 기사를 확인할  수 있습니다.',
  },
];

export { RecoItems as default };
