import React, { Component } from 'react';

import PublicHeader from './../../headers/PublicHeader';
import MarketingNav from './../../navs/MarketingNav';
import PublicFooter from './../../footers/PublicFooter';

import {
  Page,
  Content
} from './../../../design-language/components/layout';

import {
  GenericFirstHeader
} from './../../../design-language/elements';

export class Marketing extends Component {
  render() {
    return (
      <Page className="page">
        <PublicHeader />

        <Content className="content">
          <GenericFirstHeader>Consumer Group Marketing</GenericFirstHeader>
          <MarketingNav />
        </Content>

        <PublicFooter />
      </Page>
    );
  }
}

export default Marketing;
