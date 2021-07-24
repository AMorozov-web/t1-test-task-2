import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  grid-area: declaration;
  min-height: 395px;
  box-shadow: 0px 5px 18px -1px rgba(0, 0, 0, 0.39);
`;

const ButtonsContainer = styled.div`
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
  background-position: center left 7px;
  background-size: 20px 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: block;
  min-height: 58px;
  padding-left: 18px;
  padding-right: 20px;
  padding-top: 11px;
  padding-bottom: 10px;
  background-color: #ffffff;

  &:hover {
    background-color: transparent;
  }
`;

const ItemDate = styled.p`
  margin: 0;
  margin-bottom: 8px;
  font-size: 11px;
  font-weight: 500;
  color: #878988;
`;

const ItemTitle = styled.p`
  margin: 0;
  font-size: 11px;
  font-weight: 500;
  color: #274252;
`;

const DeclarationItem = () => {
  return (
    <Item>
      <ItemDate>
        15.04.2021 13:19
      </ItemDate>
      <ItemTitle>
        Декларация налога на имущество за 1-й квартал
      </ItemTitle>
    </Item>
  );
};

const Declaration = () => {

  return (
    <Container >
      <ButtonsContainer>
        <input className="visually-hidden" id="refresh" type="radio" name="tabs" checked />
        <Refresh htmlFor="refresh">
          Обновление деклараций
        </Refresh>
        <input className="visually-hidden" id="timeline" type="radio" name="tabs" />
        <Timeline htmlFor="timeline">
          Сроки подачи
        </Timeline>
      </ButtonsContainer>
      <List>
        {Array(6).fill().map((_, i) => <DeclarationItem key={i} />)}
        {/* индекс в ключи поставил только в рамках этого задания - обычно так не делаю */}
      </List>
    </Container>
  );
};

export {Declaration};
