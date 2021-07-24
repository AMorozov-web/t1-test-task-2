import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  grid-area: title;
  display: block;
  width: auto;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 22px;
  color: #676767;
  font-size: 19px;
  font-weight: 500;
`;

const Title = () => {

  return (
    <StyledTitle >
      Налоговая отчетность
    </StyledTitle>
  );
};

export {Title};
