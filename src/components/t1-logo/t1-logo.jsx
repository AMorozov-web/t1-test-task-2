import React from 'react';
import styled from 'styled-components';

const LogoLink = styled.a`
  display: block;
  width: 38px;
  height: 38px;
  margin-left: -4px;
  margin-right: 27px;
  text-decoration: none;
`;

const LogoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const T1Logo = () => {

  return (
    <LogoLink href="https://t1-consulting.ru/" target="_blank" aria-label="Перейти на сайт компании Т1 Консалтинг">
      <LogoImage src="img/t1-logo.png" width="40" height="40" alt="Логотип Т1 Консалтинг" />
    </LogoLink>
  );
};

export {T1Logo};
