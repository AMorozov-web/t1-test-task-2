import React from 'react';
import styled from 'styled-components';
import {PieChart, Pie, Cell, Legend} from 'recharts';
import {chartData, Color} from '../../const';

const Container = styled.section`
  grid-area: sum;
  min-height: 395px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 15px;
  padding-bottom: 10px;
  border: 1px solid ${Color.MERCURY};
  border-radius: 2px;
`;

const SumTitle = styled.p`
  display: block;
  margin: 0;
  margin-bottom: 17px;
  color: ${Color.TUNDORA};
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
  color: ${Color.MANTLE};
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
  color: ${Color.TUNDORA};
  background-color: transparent;
  background-image: url('img/period.svg');
  background-repeat: no-repeat;
  background-position: center right 14px;
  background-size: 13px 13px;
  border: 1px solid ${Color.MERCURY};
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
`;

const Controlls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 20px;
`;

const NavigateButton = styled.button`
  align-self: flex-end;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const NavigateButtonLeft = styled(NavigateButton)`
  & svg {
    fill: ${Color.MANTLE};
  }
`;

const NavigateButtonRight = styled(NavigateButton)`
  & svg {
    fill: ${Color.BISMARK};
  }
`;

const Pagination = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  width: min-content;
  min-height: 9px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const PaginationItem = styled.li`
  display: block;
  width: 7px;
  height: 7px;
  background-color: #d2d2d2;
  border-radius: 50%;
  transform-origin: center;

  &:not(:last-child) {
    margin-right: 9px;
  }

  &:first-child {
    background-color: ${Color.BISMARK};
  }

  &:last-child {
    transform: scale(0.7);
  }
`;

const LegendText = styled.span`
  display: inline-block;
  padding-left: 6px;
  padding-bottom: 6px;
  color: ${Color.TUNDORA};
  font-size: 11px;
`;

const renderLegendText = (value) => <LegendText>{value}</LegendText>;

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
      <PieChart width={336} height={233}>
        <Pie
          data={chartData}
          cx={72}
          cy={134}
          innerRadius={50}
          outerRadius={70}
          dataKey="value"
        >
          {chartData.map((item) => (
            <Cell key={`${item.name}`} fill={`${item.color}`} />
          ))}
        </Pie>
        <Legend
          layout={`vertical`}
          align={`right`}
          verticalAlign={`bottom`}
          iconType={`circle`}
          iconSize={7}
          formatter={renderLegendText}
          wrapperStyle={{bottom: `13px`, right: `22px`}}
        />
      </PieChart>
      <Controlls>
        <NavigateButtonLeft type="button" aria-label="Предыдущий график">
          <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M84 44H21.66L43.1 22.54a4 4 0 00-5.66-5.65L9.17 45.17a4 4 0 00-.5.61l-.17.32-.2.37c-.05.13-.08.27-.12.41-.03.12-.08.22-.1.34a3.95 3.95 0 000 1.57c.02.11.07.22.1.34.04.13.07.27.13.4.05.14.13.26.2.4l.16.29a4 4 0 00.5.61l28.29 28.28a4 4 0 005.65-5.66L21.66 52H84a4 4 0 000-8z"/></svg>
        </NavigateButtonLeft>
        <Pagination>
          <PaginationItem></PaginationItem>
          <PaginationItem></PaginationItem>
          <PaginationItem></PaginationItem>
          <PaginationItem></PaginationItem>
        </Pagination>
        <NavigateButtonRight type="button" aria-label="Следующий график">
          <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M12 52h62.34L52.9 73.46a4 4 0 105.66 5.65l28.28-28.28c.18-.19.35-.4.5-.61l.17-.32.2-.37c.05-.13.08-.27.12-.41A4 4 0 0088 48c0-.27-.03-.53-.08-.78-.02-.12-.07-.23-.1-.35-.04-.13-.07-.27-.13-.4-.05-.14-.13-.26-.2-.4l-.16-.29a3.94 3.94 0 00-.5-.61L58.54 16.89a4 4 0 00-5.65 5.66L74.34 44H12a4 4 0 000 8z"/></svg>
        </NavigateButtonRight>
      </Controlls>
    </Container>
  );
};

export {TaxSum};
