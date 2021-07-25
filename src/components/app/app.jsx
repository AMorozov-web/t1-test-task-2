import React from 'react';
import {Header} from '../header/header';
import {Search} from '../search/search';
import {Main} from '../main/main';
import {T1Logo} from '../t1-logo/t1-logo';
import {TaxLogo} from '../tax-logo/tax-logo';
import {UserBlock} from '../user-block/user-block';
import {UserInfo} from '../user-info/user-info';
import {Nav} from '../nav/nav';
import {Title} from '../title/title';
import {Declaration} from '../declaration/declaration';
import {DownloadButton} from '../download-button/download-button';
import {ViewChange} from '../view-change/view-change';
import {TaxSum} from '../tax-sum/tax-sum';
import {Table} from '../table/table';

const tableTitles = [
  `Налог на прибыль`,
  `Налог на добавленную стоймость(НДС)`,
  `Налог на имущество`,
  `НДФЛ`,
  `Страховой налог`,
  `Земельный налог`,
  `Водный налог`,
];

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
        <Nav />
        <Title />
        <DownloadButton />
        <Declaration />
        <TaxSum />
        <ViewChange />
        <Table titles={tableTitles} />
      </Main>
    </>
  );
};

export {App};
