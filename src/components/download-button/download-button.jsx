import React from 'react';
import styled from 'styled-components';
import {Color} from '../../const';

const Button = styled.button`
  grid-area: downloadButton;
  justify-self: flex-end;
  align-self: flex-end;
  display: flex;
  align-items: center;
  width: 116px;
  height: 32px;
  padding-left: 16px;
  padding-right: 14px;
  padding-top: 5px;
  padding-bottom: 8px;
  font-size: 13px;
  font-weight: 500;
  color: ${Color.BISMARK};
  border: 1px solid ${Color.BISMARK};
  border-radius: 5px;
  cursor: pointer;

  & svg {
    width: 20px;
    height: 24px;
    margin-right: 9px;
    fill: ${Color.BISMARK};
  }

  &:hover,
  &:focus {
    color: ${Color.WHITE};
    background-color: ${Color.BISMARK};
  }

  &:hover svg,
  &:focus svg {
    fill: ${Color.WHITE};
  }
`;

const DownloadButton = () => {

  return (
    <Button type="button">
      <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M114 97h-8v22H22V97h-8v30h100zM60 1v73.5L34.8 49.2l-5.7 5.7L64 89.8l34.9-34.9-5.7-5.7L68 74.5V1z"/></svg>
      Загрузить
    </Button>
  );
};

export {DownloadButton};
