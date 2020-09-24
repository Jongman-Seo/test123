const ExposureItems = [
  {
    title: '인아티클형',
    link: 'inArticle',
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
    title: '인피니트형',
    link: 'infinite',
    text:
      '한 위젯 내에 노출되는 콘텐츠 개수를 5개 혹은 8개로 제한하는 것 없이, 독자가 원하는 만큼! 무한으로! 콘텐츠를 보여줄 수 있는 위젯입니다.',
    category: [
      { title: '격자 3x2', link: 'grid3x2', text: '' },
      { title: '교차 A5', link: 'crossA5', text: '' },
      { title: '교차 B5', link: 'crossB5', text: '' },
      { title: '교차 A7', link: 'crossA7', text: '' },
      { title: '교차 B7', link: 'crossB7', text: '' },
    ],
  },
];

export { ExposureItems as default };
