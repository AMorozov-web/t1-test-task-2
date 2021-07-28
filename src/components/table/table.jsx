import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Color} from '../../const';

const Container = styled.section`
  grid-area: table;
  min-height: 170px;
  margin-top: -10px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Summary = styled.summary`
  display: flex;
  align-items: center;
  min-height: 49px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${Color.TUNDORA};
  font-size: 16px;
  font-weight: 500;
  transition: 0.2s all;
  background-color: ${Color.WHITE};
  background-image: url('img/up-tick.svg');
  background-position: center right 20px;
  background-size: 22px 22px;
  background-repeat: no-repeat;
  box-shadow: 0px 5px 18px -1px rgba(0, 0, 0, 0.21);
  border-radius: 2px;
  cursor: pointer;
`;

const DetailsContent = styled.div`
  width: auto;
  background-color: ${Color.WHITE};
  box-shadow: 0px 5px 18px -1px rgba(0, 0, 0, 0.21);
  border-radius: 2px;
`;

const Details = styled.details`
  border-radius: 2px;

  & ${Summary}::-webkit-details-marker {
    display: none
  }

  & > ${Summary} {
    list-style: none;
  }

  &[open] ${Summary} {
    padding-left: 0;
    background-color: transparent;
    background-image: url('img/down-tick.svg');
    box-shadow: none;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  display: flex;
  min-height: 35px;

  &:first-child {
    min-height: 28px;
    background-color: ${Color.CONCRETE};
  }

  &:not(:first-child) {
    border-bottom: 1px solid ${Color.MERCURY};
  }
`;

const TableCell = styled.td`
  display: flex;
  align-items: center;
  padding-right: 10px;
  font-size: 9px;
  font-weight: 500;
  color: ${Color.TUNDORA};

  &:first-child {
    width: 146px;
    padding-left: 10px;
  }

  &:nth-child(2) {
    width: 141px;
  }

  &:nth-child(3) {
    width: 147px;
    font-size: 10px;
  }

  &:nth-child(4) {
    width: 148px;
    font-size: 10px;
  }

  &:nth-child(5) {
    width: 111px;
  }
`;

const TableHead = styled(TableCell)`
  padding-left: 10px;
  font-size: 9px;
  font-weight: 500;
  color: ${Color.SILVER_CHALICE};

  &:not(:first-child) {
    padding-left: 17px;
    background-image: url('img/down-arrow-table.svg');
    background-position: center left;
    background-size: 15px 15px;
    background-repeat: no-repeat;
  }

  &:nth-child(3) {
    font-size: 9px;
  }

  &:nth-child(4) {
    font-size: 9px;
  }
`;

const ShowMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 35px;
  padding: 0;
  color: ${Color.BISMARK};
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${Color.SILVER_CHALICE};
  }
`;

const ButtonInnerText = styled.span`
  margin-left: -21px;
  font-size: 9px;
  font-weight: 500;
`;

const TableItem = ({title}) => {

  return (
    <Item>
      <Details>
        <Summary>
          {title}
        </Summary>
        <DetailsContent>
          <StyledTable>
            <tbody>
              <TableRow>
                <TableHead scope="col">
                  Название
                </TableHead>
                <TableHead scope="col">
                  Период
                </TableHead>
                <TableHead scope="col">
                  Дата обновления
                </TableHead>
                <TableHead scope="col">
                  Дата публикации
                </TableHead>
                <TableHead scope="col">
                  Корректировка
                </TableHead>
                <TableHead scope="col">
                  Статус
                </TableHead>
              </TableRow>
              <TableRow>
                <TableCell>
                  Декларация Налог на имущество
                </TableCell>
                <TableCell>
                  1-й квартал
                </TableCell>
                <TableCell>
                  04.06.2021
                </TableCell>
                <TableCell>
                  04.06.2021
                </TableCell>
                <TableCell>
                  0
                </TableCell>
                <TableCell>
                  Актуальная
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Декларация Налог на имущество
                </TableCell>
                <TableCell>
                  1-й квартал
                </TableCell>
                <TableCell>
                  04.06.2021
                </TableCell>
                <TableCell>
                  04.06.2021
                </TableCell>
                <TableCell>
                  02
                </TableCell>
                <TableCell>
                  Подана
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Декларация Налог на имущество
                </TableCell>
                <TableCell>
                  1-й квартал
                </TableCell>
                <TableCell>
                  04.06.2021
                </TableCell>
                <TableCell>
                  04.06.2021
                </TableCell>
                <TableCell>
                  03
                </TableCell>
                <TableCell>
                  Не актуальная
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Декларация Налог на имущество
                </TableCell>
                <TableCell>
                  1-й квартал
                </TableCell>
                <TableCell>
                  04.06.2021
                </TableCell>
                <TableCell>
                  04.06.2021
                </TableCell>
                <TableCell>
                  12
                </TableCell>
                <TableCell>
                  Не актуальная
                </TableCell>
              </TableRow>
            </tbody>
          </StyledTable>
          <ShowMoreButton type="button" aria-label="Показать еще">
            <ButtonInnerText>
              Показать еще
            </ButtonInnerText>
          </ShowMoreButton>
        </DetailsContent>
      </Details>
    </Item>
  );
};

const Table = ({titles}) => {

  return (
    <Container>
      <List>
        {titles.map((title) => <TableItem key={title} title={title}/>)}
      </List>
    </Container>
  );
};

TableItem.propTypes = {
  title: PropTypes.string.isRequired,
};

Table.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export {Table};
