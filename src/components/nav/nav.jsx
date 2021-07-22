import React from 'react';
import styled from 'styled-components';

const commonStyles = `
  display: block;
  width: 188px;
  min-height: 31px;
  padding-left: 38px;
  padding-right: 27px;
  color: #5a5a5a;
  font-size: 9px;
  font-weight: 500;

  &:hover,
  &:focus {
    color: #274252;
    background-color: #ffffff;
  }
`;

const StyledNav = styled.nav`
  grid-area: nav;
  display: flex;
  flex-direction: column;
  width: 188px;
`;

const Link = styled.a`
  ${commonStyles}

  text-decoration: none;
`;

const LinkBack = styled(Link)`
  color: #a6a6a6;

  &:hover,
  &:focus {
    color: #274252;
    background-color: transparent;
  }
`;

const Details = styled.details`
  ${commonStyles}
`;

const Nav = () => {

  return (
    <StyledNav>
      <LinkBack href="" aria-label="Вернуться назад">
        Меню
      </LinkBack>
      <Link href="" aria-label="Вернуться назад">
        Главная
      </Link>
    </StyledNav>
  );
};

export {Nav};
