// eslint-disable-next-line
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

/** @jsx jsx */ import { jsx } from '@emotion/core';
import DesignSidebarItems from '../constants/design/SidebarItems';
import SidebarStyle from '../styles/SidebarStyle';

const SidebarItem = ({
  items,
  title,
  group,
  category,
  activeItem,
  isCategory,
  onChangeCategory,
  onChangeSubCategory,
}) => {
  const renderItems = () =>
    items.map((item) => (
      <li className="menu_item" key={item.link}>
        <NavLink
          to={`/${group}/${category}/${item.link}/${item.category[0].link}/desktop/reco`}
          className={item.link === activeItem.link ? 'active' : ''}
          onClick={() => {
            onChangeSubCategory(item.category[0].link);
          }}
        >
          <span
            className={`${
              item.icon === item.link ? `icon ${item.link}` : 'default'
            }`}
          >
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

const DesignSidebar = ({
  resourceURL,
  activeItem,
  isCategory,
  onChangeCategory,
  onChangeSubCategory,
}) => {
  return (
    <nav css={SidebarStyle}>
      <h1 className="logo_top">
        <Link to="/">
          <img src={`${resourceURL}/img/logo_top.png`} alt="dable logo" />
        </Link>
      </h1>
      <div className="scroll_wrapper">
        {DesignSidebarItems.map(({ items, title, group, category }) => (
          <SidebarItem
            key={title}
            items={items}
            title={title}
            group={group}
            category={category}
            activeItem={activeItem}
            isCategory={isCategory}
            onChangeCategory={onChangeCategory}
            onChangeSubCategory={onChangeSubCategory}
          />
        ))}
      </div>
      <i className="icon_arrow" />
    </nav>
  );
};

export default DesignSidebar;
