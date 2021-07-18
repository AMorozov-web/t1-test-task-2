import React from 'react';
import {Header} from '../header/header';
import {MainSearch} from '../main-search/main-search';
import {T1Logo} from '../t1-logo/t1-logo';
import {TaxLogo} from '../tax-logo/tax-logo';

const App = () => {

  return (
    <Header>
      <TaxLogo />
      <T1Logo />
      <MainSearch />
    </Header>
  );
};

export {App};
