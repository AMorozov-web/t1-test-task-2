import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  display: block;
  width: 38px;
  height: 38px;
  margin-left: -4px;
`;

const T1Logo = () => {

  return (
    <LogoImage src='img/t1-logo.png' width='40' height='40' aria-label='Логотип Т1 Консалтинг' />
  );
};

export {T1Logo};
