import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  grid-area: sum;
  min-height: 395px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
`;

const SumTitle = styled.p`
  display: block;
  margin: 0;
  margin-bottom: 17px;
  color: #262626;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.1px;
  line-height: 130%;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 11px;
  font-weight: 500;
  color: #979797;
`;

const StyledSelect = styled.select`
  display: block;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 11px;
  font-weight: 500;
  color: #979797;
  background-color: transparent;
  background-image: url('img/period.svg');
  background-repeat: no-repeat;
  background-position: center right 14px;
  background-size: 13px 13px;
  border: 1px solid #5a5a5a;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
`;

const TaxSum = () => {

  return (
    <Container>
      <SumTitle>
        Сумма уплаченных налогов и сборов (млн. рублей)
      </SumTitle>
      <StyledLabel htmlFor="period">
        Период
      </StyledLabel>
      <StyledSelect id="period" defaultValue="1">
        <option value="1">1 квартал 2021</option>
        <option value="2">2 квартал 2021</option>
        <option value="3">3 квартал 2021</option>
        <option value="4">4 квартал 2021</option>
      </StyledSelect>
    </Container>
  );
};

export {TaxSum};
