// eslint-disable-next-line
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Modal from './Modal';
import Tab from './Tab';
import Preview from './Preview';

const classNames = {
  enter: 'trans enter',
  enterActive: 'trans enter active',
  enterDone: 'trans enter done',
  exit: 'trans exit',
  exitActive: 'trans exit active',
  exitDone: 'trans exit done',
};

const DesignView = ({
  resourceURL,
  group,
  activeItem,
  activeSubItem,
  isSubCategory,
  nextDevice,
  nextType,
  onChangeCategory,
  onChangeSubCategory,
  onToggleDevice,
  onToggleType,
}) => {
  const [modalHidden, setModalHidden] = useState(false);

  return (
    <>
      <TransitionGroup>
        <CSSTransition
          key={activeItem.link}
          timeout={300}
          classNames={classNames}
        >
          <section className="content design_view">
            <div className="cont_wrapper">
              <div className="cont_text">
                <h2>{activeItem.title}</h2>
                <button
                  className={`btn_modal show ${modalHidden ? '' : 'active'}`}
                  type="button"
                  aria-label="Show Modal"
                  onClick={() => setModalHidden(false)}
                />
                {activeItem.category.length > 1 && (
                  <Tab
                    activeItem={activeItem}
                    isSubCategory={isSubCategory}
                    onChangeSubCategory={onChangeSubCategory}
                  />
                )}
              </div>
              <Preview
                resourceURL={resourceURL}
                activeItem={activeItem}
                activeSubItem={activeSubItem}
                nextDevice={nextDevice}
                nextType={nextType}
                onToggleDevice={onToggleDevice}
                onToggleType={onToggleType}
              />
              <Modal
                modalHidden={modalHidden}
                setModalHidden={setModalHidden}
                activeItem={activeItem}
                activeSubItem={activeSubItem}
                isSubCategory={isSubCategory}
              />
            </div>
          </section>
        </CSSTransition>
      </TransitionGroup>
      <Link
        to="/algorithm/reco/related"
        className="btn_link"
        onClick={() => {
          onChangeCategory('reco');
        }}
      >
        <img src={`${resourceURL}/img/view/icon_link_${group}.png`} alt="" />
        추천 알고리즘 유형
      </Link>
    </>
  );
};

export { DesignView as default };
