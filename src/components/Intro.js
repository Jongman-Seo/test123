// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';

/** @jsx jsx */ import { jsx } from '@emotion/core';
import IntroStyle from '../styles/IntroStyle';

function Intro() {
  const resourceURL = 'http://static.dable.io/widget-demo';
  return (
    <div css={IntroStyle}>
      <h1 className="logo_top">
        <img src={`${resourceURL}/img/logo_top.png`} alt="dable logo" />
      </h1>
      <div className="content">
        <div className="cont_wrapper">
          <Link to="/algorithm/reco/related">
            <img src={`${resourceURL}/img/intro/algorithm.png`} alt="" /> 추천
            알고리즘 유형
          </Link>
          <Link to="/design/styled/horizontal/basic/mobile/reco">
            <img src={`${resourceURL}/img/intro/design.png`} alt="" /> 위젯
            디자인 종류
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Intro as default };
