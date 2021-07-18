import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserBlockContainer = styled.div`
  display: flex;
  min-height: 40px;
  align-items: center;
  margin-left: auto;
`;

const UserBlock = ({children}) => {

  return (
    <UserBlockContainer>
      {children}
    </UserBlockContainer>
  );
};

UserBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

export {UserBlock};
