import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  height: 40px;
  margin-right: 35px;
  background-color: #ffffff;

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
  color: #a6a6a6;
  border: 1px solid #ececec;
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
