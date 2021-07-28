import React from 'react';
import styled from 'styled-components';
import {Color} from '../../const';

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 40px;
  justify-content: center;
  align-items: flex-start;
  padding-left: 23px;
  padding-right: 30px;
`;

const UserName = styled.p`
  margin: 0;
  margin-bottom: 5px;
  color: ${Color.TUNDORA};
  font-size: 11px;
  font-weight: 500;
`;

const UserPosition = styled.p`
  margin: 0;
  color: ${Color.MANTLE};
  font-size: 11px;
  font-weight: 500;
`;

const UserInfo = () => {

  return (
    <UserInfoContainer>
      <UserName>
        Любишевских И.И.
      </UserName>
      <UserPosition>
        Бухгалтер
      </UserPosition>
    </UserInfoContainer>
  );
};

export {UserInfo};
