import React from 'react';
import {Header} from '../header/header';
import {MainSearch} from '../main-search/main-search';
import {T1Logo} from '../t1-logo/t1-logo';
import {TaxLogo} from '../tax-logo/tax-logo';
import {UserBlock} from '../user-block/user-block';
import {UserButtonsList} from '../user-buttons-list/user-buttons-list';
import {UserInfo} from '../user-info/user-info';

const App = () => {

  return (
    <Header>
      <TaxLogo />
      <T1Logo />
      <MainSearch />
      <UserBlock>
        <UserButtonsList />
        <UserInfo />
      </UserBlock>
    </Header>
  );
};

export {App};
