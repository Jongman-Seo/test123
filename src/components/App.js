import React from 'react';
import { CookiesProvider } from 'react-cookie';

import { Global } from '@emotion/core';
import ThisRoute from './Routes';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => {
  return (
    <CookiesProvider>
      <Global styles={GlobalStyle} />
      <ThisRoute />
    </CookiesProvider>
  );
};

export default App;
