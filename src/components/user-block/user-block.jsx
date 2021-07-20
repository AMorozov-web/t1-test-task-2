import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const unreadNotifyCount = 3;

const List = styled.ul`
  display: flex;
  align-items: center;
  min-height: 40px;
  margin: 0;
  margin-left: auto;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const Button = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  padding: 0;
  background-color: #ffffff;
  background-position: center center;
  background-size: 18px 18px;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;

  &::after {
    position: absolute;
    top: 10px;
    right: 10px;
    display: block;
    width: 10px;
    height: 10px;
    font-size: 9px;
    color: #ffffff;
    background-color: #8f242f;
    border-radius: 50%;
  }
`;

const Notifications = styled(Button)`
  background-image: url('img/notify.svg');

  &::after {
    content: '${unreadNotifyCount}';
  }
`;

const Favorites = styled(Button)`
  background-image: url('img/favorites.svg');
`;

const Options = styled(Button)`
  background-image: url('img/options.svg');
`;

const Support = styled(Button)`
  background-image: url('img/support.svg');
`;

const Logout = styled(Button)`
  background-image: url('img/logout.svg');
`;

const UserBlock = ({children}) => {

  return (
    <List>
      <Item>
        <Notifications type="button" aria-label='Посмотреть уведомления'/>
      </Item>
      <Item>
        <Favorites type="button" aria-label='Избранное'/>
      </Item>
      <Item>
        <Options type="button" aria-label='Опции'/>
      </Item>
      <Item>
        <Support type="button" aria-label='Техподдержка'/>
      </Item>
      {children ? React.Children.map(children, (el) => <Item key={el}>{el}</Item>) : ``}
      <Item>
        <Logout type="button" aria-label='Выйти'/>
      </Item>
    </List>
  );
};

UserBlock.propTypes = {
  children: PropTypes.node,
};

export {UserBlock};
