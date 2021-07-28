import React from 'react';
import styled from 'styled-components';
import {Color} from '../../const';

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  height: 40px;
  margin-right: 14px;
  background-color: ${Color.WHITE};

  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 7px);
    right: 14px;
    display: block;
    width: 18px;
    height: 18px;
    background-image: url('img/search.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Input = styled.input`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  padding-left: 21px;
  padding-right: 21px;
  font-size: 12px;
  font-weight: 400;
  color: ${Color.SILVER_CHALICE};
  border: 1px solid ${Color.GALLERY};
  border-radius: 4px;
`;

const Search = () => {

  return (
    <InputContainer>
      <label className='visually-hidden' htmlFor="main-search">Поиск по странице</label>
      <Input type='text' id='main-search' placeholder='Поиск...' name='main-search' />
    </InputContainer>
  );
};

export {Search};
