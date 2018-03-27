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

export class DashboardForProviderOrders extends Component {
  render() {
    return (
      <Page className="page">
        <PrivateHeader />

        <Content className="content">
          <GenericFirstHeader>Provider Order Dashboard</GenericFirstHeader>

          <Link to='/dashboard/provider'>ProviderDashboard</Link>
          <Link to='/dashboard/provider/inventory'>ProviderInventoryDashboard</Link>
          <Link to='/dashboard/provider/team'>ProviderTeamDashboard</Link>
          <Link to='/dashboard/provider/orders'>ProviderOrderDashboard</Link>
          <Link to='/dashboard/provider/donations'>ProviderDonationDashboard</Link>

          <ul>
            <li>Inspect local inventory</li>
            <li>Initial order</li>
            <li>Mark order as fulfilled</li>
          </ul>
        </Content>

        <PrivateFooter />
      </Page>
    );
  }
}

export default DashboardForProviderOrders;
