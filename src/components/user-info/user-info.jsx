import React from 'react';
import styled from 'styled-components';

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 40px;
  justify-content: center;
  align-items: flex-start;
`;

const UserName = styled.p`
  margin: 0;
  margin-bottom: 5px;
  color: #535353;
  font-size: 11px;
  font-weight: 500;
`;

const UserPosition = styled.p`
  margin: 0;
  color: #c1c1c1;
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
