// eslint-disable-next-line
import React from 'react';

import StyledItems from './StyledItems';
import ExposureItems from './ExposureItems';
import EffectItems from './EffectItems';

const DesignSidebarItems = [
  {
    items: StyledItems,
    group: 'design',
    category: 'styled',
    title: '위젯 스타일 종류',
  },
  {
    items: ExposureItems,
    group: 'design',
    category: 'exposure',
    title: '노출 효과',
  },
  {
    items: EffectItems,
    group: 'design',
    category: 'effect',
    title: '다양한 위젯 효과',
  },
];

export { DesignSidebarItems as default };
