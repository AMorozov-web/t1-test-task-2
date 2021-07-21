import React from 'react';
import styled from 'styled-components';

const baseStyles = `
  display: block;
  width: 188px;
  min-height: 31px;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledNav = styled.nav`
  grid-area: nav;
  display: flex;
  flex-direction: column;
  width: 188px;
`;

const Link = styled.a`
  ${baseStyles}

  text-decoration: none;
`;

const Details = styled.details`
  ${baseStyles}
`;

const Nav = () => {

  return (
    <StyledNav>
      <Link href="">
        nav
      </Link>
    </StyledNav>
  );
};

export {Nav};
