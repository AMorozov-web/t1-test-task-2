import React from 'react';
import styled from 'styled-components';

const LogoLink = styled.a`
  display: flex;
  width: 152px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;

const LogoText = styled.p`
  display: flex;
  width: 105px;
  min-height: 40px;
  align-items: center;
  margin: 0;
  color: #6f6f6f;
  font-size: 9px;
  font-weight: 500;
  text-transform: uppercase;
`;

const TaxLogo = () => {

  return (
    <LogoLink href="https://www.nalog.gov.ru/" target="_blank" aria-label="Перейти на сайт Федеральной Налоговой службы">
      <LogoImage src='img/tax-logo.svg' width='40' height='40' alt='Логотип Федеральной Налоговой службы' />
      <LogoText>
        Федеральная Налоговая служба
      </LogoText>
    </LogoLink>
  );
};

export {TaxLogo};
