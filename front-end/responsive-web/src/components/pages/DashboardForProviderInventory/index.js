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

export class DashboardForProviderInventory extends Component {
  render() {
    return (
      <Page className="page">
        <PrivateHeader />

        <Content className="content">
          <GenericFirstHeader>Provider Inventory Dashboard</GenericFirstHeader>

          <Link to='/dashboard/provider'>ProviderDashboard</Link>
          <Link to='/dashboard/provider/inventory'>ProviderInventoryDashboard</Link>
          <Link to='/dashboard/provider/team'>ProviderTeamDashboard</Link>
          <Link to='/dashboard/provider/orders'>ProviderOrderDashboard</Link>
          <Link to='/dashboard/provider/donations'>ProviderDonationDashboard</Link>

          <ul>
            <li>Add product</li>
            <li>Update product</li>
          </ul>
        </Content>

        <PrivateFooter />
      </Page>
    );
  }
}

export default DashboardForProviderInventory;
