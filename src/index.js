import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';
import {App} from './components/app/app';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Roboto';
    font-display: swap;
    src: local('Roboto-Regular'),
    url('../fonts/Roboto-Regular.woff2') format('woff2'),
    url('../fonts/Roboto-Regular.woff2') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    font-display: swap;
    src: local('Roboto-Medium'),
    url('../fonts/Roboto-Medium.woff2') format('woff2'),
    url('../fonts/Roboto-Medium.woff2') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    font-display: swap;
    src: local('Roboto-Bold'),
    url('../fonts/Roboto-Bold.woff2') format('woff2'),
    url('../fonts/Roboto-Bold.woff2') format('woff');
    font-weight: 700;
    font-style: normal;
  }


  img {
    max-width: 100%;
    height: auto;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, Arial ,sans-serif;
    color: #363636;
    background-color: #f3f3f3;
  }
`;

ReactDOM.render(
    <>
      <GlobalStyle />
      <App />
    </>,
    document.querySelector(`#app`)
);
