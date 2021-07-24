import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  grid-area: declaration;
  min-height: 395px;
`;

const InputsContainer = styled.div`
  display: flex;
`;

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  min-height: 50px;
  font-size: 16px;
  font-weight: 500;
  color: #262626;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;

  input:checked + & {
    background-color: #ffffff;
  }
`;

const Refresh = styled(Label)`
  width: 195px;
  padding-left: 19px;
`;

const Timeline = styled(Label)`
  padding-left: 24px;
  color: #262626;
  background-image: url('img/right-arrow.svg');
  background-position: center left 8px;
  background-size: 18px 18px;
`;

const Declaration = () => {

  return (
    <Container >
      <InputsContainer>
        <input className="visually-hidden" id="refresh" type="radio" name="tabs" checked />
        <Refresh htmlFor="refresh">
          Обновление деклараций
        </Refresh>
        <input className="visually-hidden" id="timeline" type="radio" name="tabs" />
        <Timeline htmlFor="timeline">
          Сроки подачи
        </Timeline>
      </InputsContainer>
    </Container>
  );
};

export {Declaration};
