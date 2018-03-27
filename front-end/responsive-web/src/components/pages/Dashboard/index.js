import React, { Component } from 'react';

import PrivateHeader from './../../headers/PrivateHeader';
import PrivateFooter from './../../footers/PrivateFooter';

import {
  Page,
  Content
} from './../../../design-language/components/layout';

import {
  GenericFirstHeader
} from './../../../design-language/elements';

export class Dashboard extends Component {
  render() {
    return (
      <Page className="page">
        <PrivateHeader />

        <Content className="content">
          <GenericFirstHeader>Dashboard</GenericFirstHeader>
        </Content>

        <PrivateFooter />
      </Page>
    );
  }
}

export default Dashboard;
