// eslint-disable-next-line
import React, { useReducer, useCallback } from 'react';
import { useParams } from 'react-router-dom';

/** @jsx jsx */ import { jsx } from '@emotion/core';
import AlgorithmSidebar from './AlgorithmSidebar';
import DesignSidebar from './DesignSidebar';
import AlgorithmView from './AlgorithmView';
import DesignView from './DesignView';

import RecoItems from '../constants/algorithm/RecoItems';
import FixedItems from '../constants/algorithm/FixedItems';
import StyledItems from '../constants/design/StyledItems';
import ExposureItems from '../constants/design/ExposureItems';
import EffectItems from '../constants/design/EffectItems';

import ViewStyle from '../styles/ViewStyle';

const View = () => {
  const { group, category, path, subCategory } = useParams();
  const resourceURL = '//static.dable.io/widget-demo';

  const AlgorithmItems = RecoItems.concat(FixedItems);
  const DesignItems = StyledItems.concat(ExposureItems, EffectItems);

  const activeItem = (group === 'algorithm'
    ? AlgorithmItems
    : DesignItems
  ).filter((item) => item.link === path)[0];

  const activeSubItem = activeItem.category
    ? activeItem.category.filter((item) => item.link === subCategory)[0]
    : activeItem.link;

  const initialState = {
    isCategory: category,
    isSubCategory: activeSubItem.link,
    nextDevice: 'mobile',
    nextType: 'adOnly',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_CATEGORY':
        return {
          ...state,
          isCategory: action.isCategory,
          isSubCategory: initialState.isSubCategory,
          nextDevice: initialState.nextDevice,
          nextType: initialState.nextType,
        };
      case 'CHANGE_SUBCATEGORY':
        return {
          ...state,
          isSubCategory: action.isSubCategory,
          nextDevice: initialState.nextDevice,
          nextType: initialState.nextType,
        };
      case 'TOGGLE_DEVICE':
        return {
          ...state,
          nextDevice: action.nextDevice === 'desktop' ? 'mobile' : 'desktop',
        };
      case 'TOGGLE_TYPE':
        return {
          ...state,
          nextType: action.nextType === 'reco' ? 'adOnly' : 'reco',
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isCategory, isSubCategory, nextDevice, nextType } = state;

  const onChangeCategory = useCallback((isCategory) => {
    dispatch({
      type: 'CHANGE_CATEGORY',
      isCategory,
    });
  }, []);
  const onChangeSubCategory = useCallback((isSubCategory) => {
    dispatch({
      type: 'CHANGE_SUBCATEGORY',
      isSubCategory,
    });
  }, []);
  const onToggleDevice = useCallback((nextDevice) => {
    dispatch({
      type: 'TOGGLE_DEVICE',
      nextDevice,
    });
  }, []);
  const onToggleType = useCallback((nextType) => {
    dispatch({
      type: 'TOGGLE_TYPE',
      nextType,
    });
  }, []);

  return (
    <div css={ViewStyle}>
      {group === 'algorithm' ? (
        <React.Fragment>
          <AlgorithmSidebar
            resourceURL={resourceURL}
            isCategory={isCategory}
            onChangeCategory={onChangeCategory}
          />
          <AlgorithmView
            resourceURL={resourceURL}
            group={group}
            activeItem={activeItem}
            onChangeCategory={onChangeCategory}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <DesignSidebar
            resourceURL={resourceURL}
            activeItem={activeItem}
            isCategory={isCategory}
            onChangeCategory={onChangeCategory}
            onChangeSubCategory={onChangeSubCategory}
          />
          <DesignView
            resourceURL={resourceURL}
            group={group}
            activeItem={activeItem}
            activeSubItem={activeSubItem}
            isCategory={isCategory}
            isSubCategory={isSubCategory}
            nextDevice={nextDevice}
            nextType={nextType}
            onChangeCategory={onChangeCategory}
            onChangeSubCategory={onChangeSubCategory}
            onToggleDevice={onToggleDevice}
            onToggleType={onToggleType}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export { View as default };
