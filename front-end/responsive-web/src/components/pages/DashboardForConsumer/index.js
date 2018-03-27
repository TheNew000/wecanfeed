import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PrivateHeader from './../../headers/PrivateHeader';
import PrivateFooter from './../../footers/PrivateFooter';

import {
  Page,
  Content
} from './../../../design-language/components/layout';

import {
  GenericFirstHeader
} from './../../../design-language/elements';

export class DashboardForConsumer extends Component {
  render() {
    return (
      <Page className="page">
        <PrivateHeader />

        <Content className="content">
          <GenericFirstHeader>Consumer Dashboard</GenericFirstHeader>

          <Link to='/dashboard/consumer'>ConsumerDashboard</Link>
          <Link to='/dashboard/consumer/shopping-list'>ConsumerShoppingListDashboard</Link>
          <Link to='/dashboard/consumer/orders'>ConsumerOrderDashboard</Link>
          <Link to='/dashboard/consumer/donations'>ConsumerDonationDashboard</Link>
        </Content>

        <PrivateFooter />
      </Page>
    );
  }
}

export default DashboardForConsumer;
