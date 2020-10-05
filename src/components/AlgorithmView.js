// eslint-disable-next-line
import React from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const classNames = {
  enter: 'trans enter',
  enterActive: 'trans enter active',
  enterDone: 'trans enter done',
  exit: 'trans exit',
  exitActive: 'trans exit active',
  exitDone: 'trans exit done',
};

const AlgorithmView = ({
  resourceURL,
  group,
  activeItem,
  onChangeCategory,
}) => {
  return (
    <>
      <TransitionGroup>
        <CSSTransition
          key={activeItem.link}
          timeout={300}
          classNames={classNames}
        >
          <section className="content algorithm_view">
            <div className="cont_wrapper">
              <div className="cont_text">
                <h2>{activeItem.title}</h2>
                <p>{activeItem.description}</p>
              </div>
              <div className="cont_img">
                <img
                  src={`${resourceURL}/img/view/${group}/${activeItem.link}.png`}
                  alt=""
                />
              </div>
            </div>
          </section>
        </CSSTransition>
      </TransitionGroup>
      <Link
        to="/design/styled/horizontal/basic/desktop/reco"
        className="btn_link"
        onClick={() => {
          onChangeCategory('styled');
        }}
      >
        <img src={`${resourceURL}/img/view/icon_link_${group}.png`} alt="" />
        위젯 디자인 종류
      </Link>
    </>
  );
};

export { AlgorithmView as default };
