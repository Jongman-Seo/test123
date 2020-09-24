const StyledItems = [
  {
    title: '가로 썸네일',
    icon: 'horizontal',
    link: 'horizontal',
    category: [
      {
        title: '기본',
        link: 'basic',
        text:
          '기본 가로형 위젯입니다.\n기사 상단 또는 바이라인에 위치하는 것을 추천드립니다.',
      },
      {
        title: '프리뷰',
        link: 'preview',
        text:
          '프리뷰 위젯은 다음 페이지의 첫번째 콘텐츠를 미리 볼 수 있습니다.\n방문자에게 다음 위젯에 대한 호기심을 이끌어 낼 수 있습니다.\n기사 상단 또는 바이라인에 위치하는 것을 추천드립니다.',
      },
    ],
  },
  {
    title: '세로 썸네일',
    icon: 'vertical',
    link: 'vertical',
    category: [
      {
        title: '기본',
        link: 'basic',
        text:
          '세로형 위젯은 기사를 제외하고 남는 자투리 공간을 활용할 수 있는 위젯입니다.',
        isImageOnDesktop: true,
      },
    ],
  },
  {
    title: '격자형',
    icon: 'grid',
    link: 'grid',
    category: [
      {
        title: '기본',
        link: 'basic',
        text:
          '격자형 위젯은 격자 모양으로 슬롯을 배치한 위젯입니다.\n보통 3x3 디자인이 많이 쓰이지만 요청하신다면 3x2, 4x2와 같은 다양한 디자인으로 제공 드립니다.',
      },
    ],
  },
  {
    title: '교차형',
    icon: 'cross',
    link: 'cross',
    category: [
      {
        title: 'A5',
        link: 'A5',
        text:
          '‘교차형’ 위젯은 다양한 레이아웃으로 콘텐츠를 제공함으로써 사용자의 흥미를 끌어낼 수 있습니다.\n‘교차형 A’는 위젯 왼쪽에 큰 슬롯 1개를 두고, 오른쪽에 격자형으로 4개의 작은 사이즈의 슬롯을 배치하는 구조입니다.',
        isImageOnDesktop: true,
      },
      {
        title: 'B5',
        link: 'B5',
        text:
          '‘교차형’ 위젯은 다양한 레이아웃으로 콘텐츠를 제공함으로써 사용자의 흥미를 끌어낼 수 있습니다.\n큰 슬롯 2개가 상단에, 작은 크기의 슬롯 3개가 하단에 배치되는 구조입니다.',
        isImageOnDesktop: true,
      },
      {
        title: 'A7',
        link: 'A7',
        text:
          '‘교차형’ 위젯은 다양한 레이아웃으로 콘텐츠를 제공함으로써 사용자의 흥미를 끌어낼 수 있습니다.\n‘교차형 A’는 위젯 왼쪽에 큰 슬롯 1개를 두고, 오른쪽에 격자형으로 6개의 작은 사이즈의 슬롯을 배치하는 구조입니다.',
        isImageOnDesktop: true,
      },
      {
        title: 'B7',
        link: 'B7',
        text:
          '‘교차형’ 위젯은 다양한 레이아웃으로 콘텐츠를 제공함으로써 사용자의 흥미를 끌어낼 수 있습니다.\n큰 슬롯 2개가 상단에, 작은 크기의 슬롯 3개가 중단에 다시 큰 슬롯 2개가 하단에 배치되는 구조입니다.',
      },
    ],
  },
  {
    id: 4,
    title: '리스트형',
    icon: 'list',
    link: 'list',
    category: [
      {
        title: '기본',
        link: 'basic',
        text:
          '본문 우측 영역은 PC에만 있는 영역입니다. 기사를 제외하고 남는 자투리 공간을 활용할 수 있는 위젯입니다.\n한 페이지에 콘텐츠를 4개, 6개, 12개 등 원하는 개수만큼 보여줄 수 있습니다.',
        isImage: true,
      },
    ],
  },
  {
    title: '텍스트형',
    icon: 'text',
    link: 'text',
    category: [
      {
        title: '기본',
        link: 'basic',
        text: 'lorem ipsum',
        isImage: true,
      },
    ],
  },
  {
    title: '조합형',
    icon: 'mixed',
    link: 'mixed',
    category: [
      {
        title: '2bigs6',
        link: '2bigs6',
        text: 'lorem ipsum',
        isImage: true,
      },
      {
        title: '4bigs10',
        link: '4bigs10',
        text: 'lorem ipsum',
        isImage: true,
      },
    ],
  },
  {
    title: '매거진형',
    icon: 'magazine',
    link: 'magazine',
    category: [
      {
        title: '900A',
        link: '900A',
        text:
          '사이트 하단 영역을 위해 개발된 것으로, 사이트의 가로 면적 100%를 모두 차지하도록 디자인 됐습니다.\n사이트 하단은 도달률이 낮아 자칫 의미 없는 영역으로 치부되기도 합니다. 사이트 하단에 기사의 순환 혹은 광고의 매출을 발생시키는 ‘메거진’ 위젯 적용을 통해 더 높은 수익, 더 많은 트래픽을 기대할 수 있습니다.',
      },
      {
        title: '900B',
        link: '900B',
        text:
          '사이트 하단 영역을 위해 개발된 것으로, 사이트의 가로 면적 100%를 모두 차지하도록 디자인 됐습니다.\n사이트 하단은 도달률이 낮아 자칫 의미 없는 영역으로 치부되기도 합니다. 사이트 하단에 기사의 순환 혹은 광고의 매출을 발생시키는 ‘메거진’ 위젯 적용을 통해 더 높은 수익, 더 많은 트래픽을 기대할 수 있습니다.',
        isImageOnDesktop: true,
      },
      {
        title: '900C',
        link: '900C',
        text:
          '사이트 하단 영역을 위해 개발된 것으로, 사이트의 가로 면적 100%를 모두 차지하도록 디자인 됐습니다.\n사이트 하단은 도달률이 낮아 자칫 의미 없는 영역으로 치부되기도 합니다. 사이트 하단에 기사의 순환 혹은 광고의 매출을 발생시키는 ‘메거진’ 위젯 적용을 통해 더 높은 수익, 더 많은 트래픽을 기대할 수 있습니다.',
        isImageOnDesktop: true,
      },
      {
        title: '640A',
        link: '640A',
        text: 'lorem ipsum',
      },
      {
        title: '640B',
        link: '640B',
        text: 'lorem ipsum',
      },
      {
        title: '640C',
        link: '640C',
        text: 'lorem ipsum',
        isImageOnDesktop: true,
      },
    ],
  },
  {
    title: '시크릿',
    icon: 'secret',
    link: 'secret',
    category: [
      {
        title: '기본',
        link: 'basic',
        text:
          '‘시크릿 위젯’은 콘텐츠를 중/하단까지 본 사용자가, 다시 상단으로 스크롤할 경우 노출되는 위젯입니다.\n처음 콘텐츠를 볼 때는 노출 되지 않다가, 상단으로 스크롤 시 보임으로서 노출을 확대하는 효과를 가져옵니다. 많은 사람들에게 광고를 보여주고 싶지만, 한정된 지면 때문에 고민하는 분들에게 적합합니다.',
      },
    ],
  },
  {
    title: '카드 뉴스',
    icon: 'cardNews',
    link: 'cardNews',
    category: [
      {
        title: '기본',
        link: 'basic',
        text:
          '화려하고 강렬한 사진을 사용하는 매거진에서는 제목보다 사진이 중심이 되는 위젯을 선호합니다.\n이 위젯은 사진으로 시선을 끌지만 제목의 비중도 함께 챙길 수 있도록 고안된 형태입니다. 사진과 제목을 한 묶음으로 보여주는 디자인은 언론사의 카드뉴스, 헤드라인, 사진뉴스 등 기사 하나마다 완결성이 높은 콘텐츠를 추천하기에 제격입니다',
      },
    ],
  },
  {
    title: '광고 전용',
    icon: 'adOnly',
    link: 'adOnly',
    isAdOnly: true,
    category: [
      {
        title: '리스트형',
        link: 'list',
        text: 'lorem ipsum',
      },
      {
        title: '1slot',
        link: '1slot',
        text: 'lorem ipsum',
      },
      {
        title: '띠배너 가로형',
        link: 'bannerHorizontal',
        text: 'lorem ipsum',
        isImage: true,
        hasNoMobile: true,
      },
      {
        title: '띠배너 세로형',
        link: 'bannerVertical',
        text: 'lorem ipsum',
        isImage: true,
        hasNoMobile: true,
      },
    ],
  },
];

export { StyledItems as default };
