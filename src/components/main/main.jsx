import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, fit-content);
  grid-template-rows: repeat(4, fit-content);
  grid-template-areas:  "nav title downloadButton",
                        "nav declaration sum",
                        "nav type type",
                        "nav table table";
  width: 990px;
  margin: 0 auto;
`;

const Main = ({children}) => {

  return (
    <main>
      <MainContainer>
        {children}
      </MainContainer>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export {Main};