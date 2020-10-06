// eslint-disable-next-line
import React from 'react';

import RecoItems from './RecoItems';
import FixedItems from './FixedItems';

const AlgorithmSidebarItems = [
  {
    items: RecoItems,
    group: 'algorithm',
    category: 'reco',
    title: '추천 유형',
  },
  {
    items: FixedItems,
    group: 'algorithm',
    category: 'fixed',
    title: '고정 위젯 유형',
  },
];

export { AlgorithmSidebarItems as default };
