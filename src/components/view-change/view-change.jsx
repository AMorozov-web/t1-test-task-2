import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  padding-top: 21px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 10px;
  font-weight: 500;
  color: #5a5a5a;
`;

const StyledSelect = styled.select`
  grid-area: select;
  display: block;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 11px;
  font-weight: 500;
  color: #5a5a5a;
  background-color: transparent;
  background-image: url('img/down-arrow.svg');
  background-repeat: no-repeat;
  background-position: center right 15px;
  background-size: 13px 13px;
  border: 1px solid #5a5a5a;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
`;

const ViewChange = () => {

  return (
    <Container>
      <StyledLabel htmlFor="view-change">
        Вид
      </StyledLabel>
      <StyledSelect id="view-change" defaultValue="1">
        <option value="1">1 квартал</option>
        <option value="2">2 квартал</option>
        <option value="3">3 квартал</option>
        <option value="4">4 квартал</option>
      </StyledSelect>
    </Container>
  );
};

export {ViewChange};
