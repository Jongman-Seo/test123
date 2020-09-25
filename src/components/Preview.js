// eslint-disable-next-line
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

/** @jsx jsx */ import { jsx } from '@emotion/core';
import PreviewStyle from '../styles/PreviewStyle';

const Preview = ({
  resourceURL,
  activeItem,
  activeSubItem,
  nextDevice,
  nextType,
  onToggleDevice,
  onToggleType,
}) => {
  const { group, category, path, subCategory, device, type } = useParams();
  const history = useHistory();

  const deviceList = [
    { option: 'mobile', text: 'Mobile' },
    { option: 'desktop', text: 'Desktop' },
  ];
  const typeList = [
    { option: 'reco', text: 'Reco' },
    { option: 'adOnly', text: 'AD-Only' },
  ];

  const resourceLink = `${resourceURL}/img/view/${group}/${device}/${type}/${`${activeItem.link}_${activeSubItem.link}`}`;
  const commonHistoryURL = `/${group}/${category}/${path}/${subCategory}`;

  return (
    <div className="cont_img" css={PreviewStyle}>
      <div className={`img_box ${device}`}>
        {device === 'desktop' && activeSubItem.isImageOnDesktop ? (
          <img src={`${resourceLink}.png`} alt="" />
        ) : activeSubItem.isImage ? (
          <img src={`${resourceLink}.png`} alt="" />
        ) : (
          <video src={`${resourceLink}.mp4`} autoPlay loop muted>
            <source src={`${resourceLink}.mp4`} type="video/mp4" />
          </video>
        )}
      </div>
      <ul className="toggle_box">
        {activeSubItem.hasNoMobile !== true && (
          <li className="toggle_item">
            <button
              className={`control device ${device === 'desktop' && 'toggled'}`}
              type="button"
              onClick={() => {
                onToggleDevice(nextDevice);
                history.push(`${commonHistoryURL}/${nextDevice}/${type}`);
              }}
            />
            {deviceList.map(({ option, text }) => (
              <span
                key={option}
                className={`option device ${
                  option === device ? 'toggled' : ''
                }`}
                onClick={() => {
                  onToggleDevice(option);
                  history.push(`${commonHistoryURL}/${option}/${type}`);
                }}
              >
                {text}
              </span>
            ))}
          </li>
        )}
        {activeItem.isAdOnly !== true && (
          <li className="toggle_item">
            <button
              className={`control type ${type === 'adOnly' && 'toggled'}`}
              type="button"
              onClick={() => {
                onToggleType(nextType);
                history.push(`${commonHistoryURL}/${device}/${nextType}`);
              }}
            />
            {typeList.map(({ option, text }) => (
              <span
                key={option}
                className={`option type ${option === type ? 'toggled' : ''}`}
                onClick={() => {
                  onToggleDevice(option);
                  history.push(`${commonHistoryURL}/${device}/${option}`);
                }}
              >
                {text}
              </span>
            ))}
          </li>
        )}
      </ul>
    </div>
  );
};

export { Preview as default };
