import React from 'react';
import styled from 'styled-components';

const unreadNotifyCount = 3;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Button = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  padding: none;
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

  return (
    <List>
      <Item>
      <Item>
        <Logout type="button" aria-label='Выйти'/>
      </Item>
    </List>
  );
};

export {UserButtonsList};
