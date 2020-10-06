import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Intro from './Intro';
import View from './View';

const ThisRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route path="/test123" component={Intro} />
      <Route
        path="/:group/:category/:path/:subCategory?/:device?/:type?"
        component={View}
      />
    </Switch>
  </BrowserRouter>
  // group:  알고리즘 or 디자인
  // category: reco or fixed / styled or exposed or effect
  // path: link
  // subCategory: tab영역
  // device: mobile or desktop
  // type: Reco or AdsOnly
);

export default ThisRoute;
