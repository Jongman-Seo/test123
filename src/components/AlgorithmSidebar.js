// eslint-disable-next-line
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

/** @jsx jsx */ import { jsx } from '@emotion/core';
import AlgorithmSidebarItems from '../constants/algorithm/SidebarItems';
import SidebarStyle from '../styles/SidebarStyle';

const SidebarItem = ({
  items,
  title,
  group,
  category,
  isCategory,
  onChangeCategory,
}) => {
  const renderItems = () =>
    items.map((item) => (
      <li className="menu_item" key={item.link}>
        <NavLink to={`/${group}/${category}/${item.link}`}>
          <span className={`${item.icon === 'best' ? 'best' : 'default'}`}>
            {item.title}
          </span>
        </NavLink>
      </li>
    ));

  return (
    <div className={`menu ${isCategory === category ? 'show' : ''}`}>
      <button
        className="menu_title"
        type="button"
        onClick={() => onChangeCategory(category)}
      >
        {title}
      </button>
      <ul>{renderItems()}</ul>
    </div>
  );
};

const AlgorithmSidebar = ({ resourceURL, isCategory, onChangeCategory }) => {
  return (
    <nav css={SidebarStyle}>
      <h1 className="logo_top">
        <Link to="/">
          <img src={`${resourceURL}/img/logo_top.png`} alt="dable logo" />
        </Link>
      </h1>
      <div className="scroll_wrapper">
        {AlgorithmSidebarItems.map(({ items, title, group, category }) => (
          <SidebarItem
            key={title}
            items={items}
            title={title}
            group={group}
            category={category}
            isCategory={isCategory}
            onChangeCategory={onChangeCategory}
          />
        ))}
      </div>
      <i className="icon_arrow" />
    </nav>
  );
};

export default AlgorithmSidebar;
