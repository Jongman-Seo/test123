import React from 'react';

import { Global } from '@emotion/core';
import ThisRoute from './Routes';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <ThisRoute />
    </>
  );
};

export default App;
