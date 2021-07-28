import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  grid-area: title;
  display: block;
  width: auto;
  margin: 0;
  padding-top: 18px;
  padding-bottom: 8px;
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
