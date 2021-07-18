import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  width: 152px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
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
    <LogoContainer>
      <LogoImage src='img/tax-logo.svg' width='40' height='40' aria-label='Логотип Федеральной Налоговой службы' />
      <LogoText>
        Федеральная Налоговая служба
      </LogoText>
    </LogoContainer>
  );
};

export {TaxLogo};
