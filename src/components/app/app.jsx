import React from 'react';
import {Header} from '../header/header';
import {Search} from '../search/search';
import {Main} from '../main/main';
import {T1Logo} from '../t1-logo/t1-logo';
import {TaxLogo} from '../tax-logo/tax-logo';
import {UserBlock} from '../user-block/user-block';
import {UserInfo} from '../user-info/user-info';

const App = () => {

  return (
    <>
      <Header>
        <TaxLogo />
        <T1Logo />
        <Search />
        <UserBlock>
          <UserInfo />
        </UserBlock>
      </Header>
      <Main>
        Main
      </Main>
    </>
  );
};

export {App};
