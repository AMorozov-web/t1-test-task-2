import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
  min-height: 64px;
  background-color: #ffffff;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 990px;
  min-height: 64px;
  align-items: center;
  margin: 0 auto;
  padding-left: 13px;
  padding-right: 25px;
`;

const Header = ({children}) => {

  return (
    <StyledHeader>
      <HeaderContainer>
        {children}
      </HeaderContainer>
    </StyledHeader>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export {Header};
