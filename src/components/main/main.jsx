import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(3, fit-content);
  grid-template-rows: repeat(4, fit-content);
`;

const Main = ({children}) => {

  return (
    <StyledMain>
      {children}
    </StyledMain>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export {Main};
