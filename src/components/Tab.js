import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

const Tab = ({ activeItem, isSubCategory, onChangeSubCategory }) => {
  const { group, category, path } = useParams();
  return (
    <ul className="tab_list">
      {activeItem.category.map(({ title, link }) => (
        <li key={link}>
          <NavLink
            to={`/${group}/${category}/${path}/${link}/desktop/${
              path === 'adOnly' ? 'adOnly' : 'reco'
            }`}
            className={`${link === isSubCategory && 'default_active'}`}
            onClick={() => {
              onChangeSubCategory(link);
            }}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export { Tab as default };
