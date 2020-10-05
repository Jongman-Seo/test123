// eslint-disable-next-line
import React from 'react';
import { useParams } from 'react-router-dom';

/** @jsx jsx */ import { jsx } from '@emotion/core';
import ModalStyle from '../styles/ModalStyle';

const Modal = ({ modalHidden, setModalHidden, activeItem, activeSubItem }) => {
  const { device } = useParams();
  return (
    <div
      className={`box_modal ${modalHidden ? 'hidden' : ''}`}
      css={ModalStyle}
    >
      <h3>
        <span className={`icon ${activeItem.link}`} />
        {activeItem.title}
      </h3>
      <p>
        {device === 'mobile' && activeSubItem.textOnMobile
          ? activeSubItem.textOnMobile
          : activeSubItem.text}
      </p>
      <button
        className="btn_modal close"
        type="button"
        aria-label="Close Modal"
        onClick={() => setModalHidden(true)}
      />
    </div>
  );
};

export { Modal as default };
