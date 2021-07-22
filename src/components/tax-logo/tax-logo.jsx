import React from 'react';
import styled from 'styled-components';

const LogoLink = styled.a`
  display: flex;
  width: 147px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  display: block;
  height: 40px;
`;

const TaxLogo = () => {

  return (
    <LogoLink href="https://www.nalog.gov.ru/" target="_blank" aria-label="Перейти на сайт Федеральной Налоговой службы">
      <LogoImage src='img/fns-logo.png' height='40' alt='Логотип Федеральной Налоговой службы' />
    </LogoLink>
  );
};

export {TaxLogo};
