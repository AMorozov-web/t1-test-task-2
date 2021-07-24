import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 190px 1fr 1fr;
  grid-template-rows: repeat(4, min-content);
  grid-template-areas:  "nav title downloadButton"
                        "nav declaration sum"
                        "nav type type"
                        "nav table table";
  column-gap: 25px;
  row-gap: 16px;
  width: 1027px;
  margin: 0 auto;
  padding-left: 13px;
  padding-right: 25px;
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
