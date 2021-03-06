import React from 'react';
import styled from 'styled-components';
import {Color} from '../../const';

const StyledNav = styled.nav`
  grid-area: nav;
  display: flex;
  flex-direction: column;
  width: 188px;
`;

const StyledText = styled.p`
  margin: 0;
  margin-top: -3px;
  color: ${Color.TUNDORA};
  font-size: 11px;
  font-weight: 500;
  line-height: 140%;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  width: 188px;
  min-height: 23px;
  padding-left: 10px;
  padding-right: 27px;
  color: ${Color.TUNDORA};
  text-decoration: none;

  &:hover ${StyledText},
  &:focus ${StyledText} {
    color: ${Color.BISMARK};
  }

  & svg {
    width: 18px;
    height: 17px;
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    color: ${Color.BISMARK};
  }
`;

const LinkBack = styled(Link)`
  color: ${Color.SILVER_CHALICE};

  & ${StyledText} {
    color: ${Color.SILVER_CHALICE};
  }
`;

const Summary = styled.summary`
  display: flex;
  align-items: center;
  width: 188px;
  min-height: 31px;
  padding-left: 10px;
  padding-right: 33px;
  color: ${Color.TUNDORA};
  background-repeat: no-repeat;
  background-position: center right 15px;
  background-size: 12px 12px;
  transition: 0.2s all;
  cursor: pointer;

  &:hover ${StyledText},
  &:focus ${StyledText} {
    color: ${Color.BISMARK};
  }

  & svg {
    width: 18px;
    height: 17px;
    margin-right: 11px;
  }

  &:hover,
  &:focus {
    color: ${Color.BISMARK};
  }
`;

const DropdownLink = styled.details`
  & ${Summary}::-webkit-details-marker {
    display: none
  }

  & > ${Summary} {
    list-style: none;
  }

  & ${Summary} {
    line-height: 140%;
    background-image: url('img/down-arrow.svg');
  }

  &[open] {
    margin-bottom: 20px;
  }

  &[open] ${Summary} {
    min-height: 47px;
    padding-left: 25px;
    color: ${Color.BISMARK};
    background-image: url('img/up-arrow.svg');
    background-position: center right 26px;
    background-color: #ffffff;
    box-shadow: 0px 5px 18px -1px rgba(0, 0, 0, 0.21);
    line-height: 140%;

    & ${StyledText} {
      color: ${Color.BISMARK};
    }
  }
`;

const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 175px;
  margin: 0;
  margin-left: 12px;
  padding: 0;
  padding-left: 14px;
  padding-top: 17px;
  padding-bottom: 6px;
  border-left: 3px solid ${Color.MERCURY};
  list-style: none;
`;

const DropdownItem = styled.li`

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & ${Link} {
    min-height: 10px;
  }
`;


const List = styled.ul`
  margin: 0;
  padding: 0;
  padding-top: 4px;
  list-style: none;
`;

const Item = styled.li`

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Nav = () => {

  return (
    <StyledNav>
      <List>
        <Item>
          <LinkBack href="" aria-label="?????????????????? ??????????">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.12 15.53L25 5.66a1 1 0 011.41 1.41l-9.06 9.06 8.8 8.8a1 1 0 010 1.41 1 1 0 01-1.42 0l-9.61-9.61a.85.85 0 010-1.2z" fill="currentColor"/><path d="M5.54 15.53l9.88-9.87a1 1 0 111.41 1.41l-9.06 9.06 8.8 8.8a1 1 0 010 1.41 1 1 0 01-1.41 0l-9.62-9.61a.85.85 0 010-1.2z" fill="currentColor"/></svg>
            <StyledText>
              ????????
            </StyledText>
          </LinkBack>
        </Item>
        <Item>
          <Link href="" aria-label="??????????????">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M29.71 15.29l-3-3-10-10a1 1 0 00-1.42 0l-10 10-3 3a1 1 0 000 1.42 1 1 0 001.42 0L5 15.41V29a1 1 0 001 1h20a1 1 0 001-1V15.41l1.29 1.3a1 1 0 001.42 0 1 1 0 000-1.42zM25 28H7V13.41l9-9 9 9z" fill="currentColor"/></svg>
            <StyledText>
              ??????????????
            </StyledText>
          </Link>
        </Item>
        <Item>
          <DropdownLink aria-label="?????????????????? ????????????????????">
            <Summary>
              <svg viewBox="0 0 19 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.12 0H.5a.5.5 0 00-.5.5v22.75a.5.5 0 00.5.5h17.62a.5.5 0 00.5-.5V.5a.5.5 0 00-.5-.5zm-.5 22.75H1V1h16.62z" fill="currentColor"/><path d="M4.06 7.05h10.5a.5.5 0 00.5-.5V3.68a.5.5 0 00-.5-.5H4.06a.5.5 0 00-.5.5v2.87a.5.5 0 00.5.5zm.5-2.87h9.5v1.87h-9.5z" fill="currentColor"/><circle cx="4.72" cy="10.65" r=".81" fill="currentColor"/><circle cx="7.78" cy="10.65" r=".81" fill="currentColor"/><circle cx="10.84" cy="10.65" r=".81" fill="currentColor"/><circle cx="13.91" cy="10.65" r=".81" fill="currentColor"/><circle cx="4.72" cy="14.45" r=".82" fill="currentColor"/><circle cx="7.78" cy="14.45" r=".82" fill="currentColor"/><circle cx="10.84" cy="14.45" r=".82" fill="currentColor"/><circle cx="13.91" cy="14.45" r=".82" fill="currentColor"/><circle cx="4.72" cy="18.25" r=".82" fill="currentColor"/><circle cx="7.78" cy="18.25" r=".82" fill="currentColor"/><circle cx="10.84" cy="18.25" r=".82" fill="currentColor"/><circle cx="13.91" cy="18.25" r=".82" fill="currentColor"/></svg>
              <StyledText>
                ?????????????????? ????????????????????
              </StyledText>
            </Summary>
            <DropdownList>
              <DropdownItem>
                <Link href="" aria-label="?????????? ???? ??????????????">
                  <StyledText>
                    ?????????? ???? ??????????????
                  </StyledText>
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="" aria-label="?????????? ???? ?????????????????????? ??????????????????">
                  <StyledText>
                    ?????????? ???? ?????????????????????? ?????????????????? (??????)
                  </StyledText>
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="" aria-label="?????????? ???? ??????????????????">
                  <StyledText>
                    ?????????? ???? ??????????????????
                  </StyledText>
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="" aria-label="????????">
                  <StyledText>
                    ????????
                  </StyledText>
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="" aria-label="?????????????????? ????????????">
                  <StyledText>
                    ?????????????????? ????????????
                  </StyledText>
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="" aria-label="?????????????????? ??????????">
                  <StyledText>
                    ?????????????????? ??????????
                  </StyledText>
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="" aria-label="???????????? ??????????">
                  <StyledText>
                    ???????????? ??????????
                  </StyledText>
                </Link>
              </DropdownItem>
            </DropdownList>
          </DropdownLink>
        </Item>
        <Item>
          <DropdownLink aria-label="?????????????????????????? ????????????????????">
            <Summary>
              <svg viewBox="0 0 19 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.12 0H.5a.5.5 0 00-.5.5v22.75a.5.5 0 00.5.5h17.62a.5.5 0 00.5-.5V.5a.5.5 0 00-.5-.5zm-.5 22.75H1V1h16.62z" fill="currentColor"/><path d="M4.06 7.05h10.5a.5.5 0 00.5-.5V3.68a.5.5 0 00-.5-.5H4.06a.5.5 0 00-.5.5v2.87a.5.5 0 00.5.5zm.5-2.87h9.5v1.87h-9.5z" fill="currentColor"/><circle cx="4.72" cy="10.65" r=".81" fill="currentColor"/><circle cx="7.78" cy="10.65" r=".81" fill="currentColor"/><circle cx="10.84" cy="10.65" r=".81" fill="currentColor"/><circle cx="13.91" cy="10.65" r=".81" fill="currentColor"/><circle cx="4.72" cy="14.45" r=".82" fill="currentColor"/><circle cx="7.78" cy="14.45" r=".82" fill="currentColor"/><circle cx="10.84" cy="14.45" r=".82" fill="currentColor"/><circle cx="13.91" cy="14.45" r=".82" fill="currentColor"/><circle cx="4.72" cy="18.25" r=".82" fill="currentColor"/><circle cx="7.78" cy="18.25" r=".82" fill="currentColor"/><circle cx="10.84" cy="18.25" r=".82" fill="currentColor"/><circle cx="13.91" cy="18.25" r=".82" fill="currentColor"/></svg>
              <StyledText>
                ?????????????????????????? ????????????????????
              </StyledText>
            </Summary>
            <DropdownList>
              <Link href="" aria-label="?????????????????????????? ????????????????????">
                <StyledText>
                  ?????????????????????????? ????????????????????
                </StyledText>
              </Link>
            </DropdownList>
          </DropdownLink>
        </Item>
        <Item>
          <DropdownLink aria-label="??????">
            <Summary>
              <svg viewBox="0 0 19 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.12 0H.5a.5.5 0 00-.5.5v22.75a.5.5 0 00.5.5h17.62a.5.5 0 00.5-.5V.5a.5.5 0 00-.5-.5zm-.5 22.75H1V1h16.62z" fill="currentColor"/><path d="M4.06 7.05h10.5a.5.5 0 00.5-.5V3.68a.5.5 0 00-.5-.5H4.06a.5.5 0 00-.5.5v2.87a.5.5 0 00.5.5zm.5-2.87h9.5v1.87h-9.5z" fill="currentColor"/><circle cx="4.72" cy="10.65" r=".81" fill="currentColor"/><circle cx="7.78" cy="10.65" r=".81" fill="currentColor"/><circle cx="10.84" cy="10.65" r=".81" fill="currentColor"/><circle cx="13.91" cy="10.65" r=".81" fill="currentColor"/><circle cx="4.72" cy="14.45" r=".82" fill="currentColor"/><circle cx="7.78" cy="14.45" r=".82" fill="currentColor"/><circle cx="10.84" cy="14.45" r=".82" fill="currentColor"/><circle cx="13.91" cy="14.45" r=".82" fill="currentColor"/><circle cx="4.72" cy="18.25" r=".82" fill="currentColor"/><circle cx="7.78" cy="18.25" r=".82" fill="currentColor"/><circle cx="10.84" cy="18.25" r=".82" fill="currentColor"/><circle cx="13.91" cy="18.25" r=".82" fill="currentColor"/></svg>
              <StyledText>
                ??????
              </StyledText>
            </Summary>
            <DropdownList>
              <Link href="" aria-label="??????">
                <StyledText>
                  ??????
                </StyledText>
              </Link>
            </DropdownList>
          </DropdownLink>
        </Item>
        <Item>
          <DropdownLink aria-label="??????">
            <Summary>
              <svg viewBox="0 0 19 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.12 0H.5a.5.5 0 00-.5.5v22.75a.5.5 0 00.5.5h17.62a.5.5 0 00.5-.5V.5a.5.5 0 00-.5-.5zm-.5 22.75H1V1h16.62z" fill="currentColor"/><path d="M4.06 7.05h10.5a.5.5 0 00.5-.5V3.68a.5.5 0 00-.5-.5H4.06a.5.5 0 00-.5.5v2.87a.5.5 0 00.5.5zm.5-2.87h9.5v1.87h-9.5z" fill="currentColor"/><circle cx="4.72" cy="10.65" r=".81" fill="currentColor"/><circle cx="7.78" cy="10.65" r=".81" fill="currentColor"/><circle cx="10.84" cy="10.65" r=".81" fill="currentColor"/><circle cx="13.91" cy="10.65" r=".81" fill="currentColor"/><circle cx="4.72" cy="14.45" r=".82" fill="currentColor"/><circle cx="7.78" cy="14.45" r=".82" fill="currentColor"/><circle cx="10.84" cy="14.45" r=".82" fill="currentColor"/><circle cx="13.91" cy="14.45" r=".82" fill="currentColor"/><circle cx="4.72" cy="18.25" r=".82" fill="currentColor"/><circle cx="7.78" cy="18.25" r=".82" fill="currentColor"/><circle cx="10.84" cy="18.25" r=".82" fill="currentColor"/><circle cx="13.91" cy="18.25" r=".82" fill="currentColor"/></svg>
              <StyledText>
                ??????
              </StyledText>
            </Summary>
            <DropdownList>
              <Link href="" aria-label="??????">
                <StyledText>
                  ??????
                </StyledText>
              </Link>
            </DropdownList>
          </DropdownLink>
        </Item>
        <Item>
          <DropdownLink aria-label="???????????????????????????? ????????????">
            <Summary>
              <svg viewBox="0 0 19 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.12 0H.5a.5.5 0 00-.5.5v22.75a.5.5 0 00.5.5h17.62a.5.5 0 00.5-.5V.5a.5.5 0 00-.5-.5zm-.5 22.75H1V1h16.62z" fill="currentColor"/><path d="M4.06 7.05h10.5a.5.5 0 00.5-.5V3.68a.5.5 0 00-.5-.5H4.06a.5.5 0 00-.5.5v2.87a.5.5 0 00.5.5zm.5-2.87h9.5v1.87h-9.5z" fill="currentColor"/><circle cx="4.72" cy="10.65" r=".81" fill="currentColor"/><circle cx="7.78" cy="10.65" r=".81" fill="currentColor"/><circle cx="10.84" cy="10.65" r=".81" fill="currentColor"/><circle cx="13.91" cy="10.65" r=".81" fill="currentColor"/><circle cx="4.72" cy="14.45" r=".82" fill="currentColor"/><circle cx="7.78" cy="14.45" r=".82" fill="currentColor"/><circle cx="10.84" cy="14.45" r=".82" fill="currentColor"/><circle cx="13.91" cy="14.45" r=".82" fill="currentColor"/><circle cx="4.72" cy="18.25" r=".82" fill="currentColor"/><circle cx="7.78" cy="18.25" r=".82" fill="currentColor"/><circle cx="10.84" cy="18.25" r=".82" fill="currentColor"/><circle cx="13.91" cy="18.25" r=".82" fill="currentColor"/></svg>
              <StyledText>
                ???????????????????????????? ????????????
              </StyledText>
            </Summary>
            <DropdownList>
              <Link href="" aria-label="???????????????????????????? ????????????">
                <StyledText>
                  ???????????????????????????? ????????????
                </StyledText>
              </Link>
            </DropdownList>
          </DropdownLink>
        </Item>
        <Item>
          <Link href="" aria-label="??????????????">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M29.71 15.29l-3-3-10-10a1 1 0 00-1.42 0l-10 10-3 3a1 1 0 000 1.42 1 1 0 001.42 0L5 15.41V29a1 1 0 001 1h20a1 1 0 001-1V15.41l1.29 1.3a1 1 0 001.42 0 1 1 0 000-1.42zM25 28H7V13.41l9-9 9 9z" fill="currentColor"/></svg>
            <StyledText>
              ??????????????
            </StyledText>
          </Link>
        </Item>
        <Item>
          <Link href="" aria-label="????????????????????">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M29.71 15.29l-3-3-10-10a1 1 0 00-1.42 0l-10 10-3 3a1 1 0 000 1.42 1 1 0 001.42 0L5 15.41V29a1 1 0 001 1h20a1 1 0 001-1V15.41l1.29 1.3a1 1 0 001.42 0 1 1 0 000-1.42zM25 28H7V13.41l9-9 9 9z" fill="currentColor"/></svg>
            <StyledText>
              ????????????????????
            </StyledText>
          </Link>
        </Item>
        <Item>
          <DropdownLink aria-label="?????????????????????? ??????????????????">
            <Summary>
              <svg viewBox="0 0 19 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.12 0H.5a.5.5 0 00-.5.5v22.75a.5.5 0 00.5.5h17.62a.5.5 0 00.5-.5V.5a.5.5 0 00-.5-.5zm-.5 22.75H1V1h16.62z" fill="currentColor"/><path d="M4.06 7.05h10.5a.5.5 0 00.5-.5V3.68a.5.5 0 00-.5-.5H4.06a.5.5 0 00-.5.5v2.87a.5.5 0 00.5.5zm.5-2.87h9.5v1.87h-9.5z" fill="currentColor"/><circle cx="4.72" cy="10.65" r=".81" fill="currentColor"/><circle cx="7.78" cy="10.65" r=".81" fill="currentColor"/><circle cx="10.84" cy="10.65" r=".81" fill="currentColor"/><circle cx="13.91" cy="10.65" r=".81" fill="currentColor"/><circle cx="4.72" cy="14.45" r=".82" fill="currentColor"/><circle cx="7.78" cy="14.45" r=".82" fill="currentColor"/><circle cx="10.84" cy="14.45" r=".82" fill="currentColor"/><circle cx="13.91" cy="14.45" r=".82" fill="currentColor"/><circle cx="4.72" cy="18.25" r=".82" fill="currentColor"/><circle cx="7.78" cy="18.25" r=".82" fill="currentColor"/><circle cx="10.84" cy="18.25" r=".82" fill="currentColor"/><circle cx="13.91" cy="18.25" r=".82" fill="currentColor"/></svg>
              <StyledText>
                ?????????????????????? ??????????????????
              </StyledText>
            </Summary>
            <DropdownList>
              <Link href="" aria-label="?????????????????????? ??????????????????">
                <StyledText>
                  ?????????????????????? ??????????????????
                </StyledText>
              </Link>
            </DropdownList>
          </DropdownLink>
        </Item>
        <Item>
          <DropdownLink aria-label="?? ????????????????">
            <Summary>
              <svg viewBox="0 0 19 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.12 0H.5a.5.5 0 00-.5.5v22.75a.5.5 0 00.5.5h17.62a.5.5 0 00.5-.5V.5a.5.5 0 00-.5-.5zm-.5 22.75H1V1h16.62z" fill="currentColor"/><path d="M4.06 7.05h10.5a.5.5 0 00.5-.5V3.68a.5.5 0 00-.5-.5H4.06a.5.5 0 00-.5.5v2.87a.5.5 0 00.5.5zm.5-2.87h9.5v1.87h-9.5z" fill="currentColor"/><circle cx="4.72" cy="10.65" r=".81" fill="currentColor"/><circle cx="7.78" cy="10.65" r=".81" fill="currentColor"/><circle cx="10.84" cy="10.65" r=".81" fill="currentColor"/><circle cx="13.91" cy="10.65" r=".81" fill="currentColor"/><circle cx="4.72" cy="14.45" r=".82" fill="currentColor"/><circle cx="7.78" cy="14.45" r=".82" fill="currentColor"/><circle cx="10.84" cy="14.45" r=".82" fill="currentColor"/><circle cx="13.91" cy="14.45" r=".82" fill="currentColor"/><circle cx="4.72" cy="18.25" r=".82" fill="currentColor"/><circle cx="7.78" cy="18.25" r=".82" fill="currentColor"/><circle cx="10.84" cy="18.25" r=".82" fill="currentColor"/><circle cx="13.91" cy="18.25" r=".82" fill="currentColor"/></svg>
              <StyledText>
                ?? ????????????????
              </StyledText>
            </Summary>
            <DropdownList>
              <Link href="" aria-label="?? ????????????????">
                <StyledText>
                  ?? ????????????????
                </StyledText>
              </Link>
            </DropdownList>
          </DropdownLink>
        </Item>
      </List>
    </StyledNav>
  );
};

export {Nav};
