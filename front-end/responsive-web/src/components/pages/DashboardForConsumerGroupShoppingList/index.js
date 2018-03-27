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

export class DashboardForConsumerGroupShoppingList extends Component {
  render() {
    return (
      <Page className="page">
        <PrivateHeader />

        <Content className="content">
          <GenericFirstHeader>Consumer Group Shopping List Dashboard</GenericFirstHeader>

          <Link to='/dashboard/consumer-group'>ConsumerGroupDashboard</Link>
          <Link to='/dashboard/consumer-group/shopping-list'>ConsumerGroupShoppingListDashboard</Link>
          <Link to='/dashboard/consumer-group/team'>ConsumerGroupTeamDashboard</Link>
          <Link to='/dashboard/consumer-group/orders'>ConsumerGroupOrderDashboard</Link>
          <Link to='/dashboard/consumer-group/donations'>ConsumerGroupDonationDashboard</Link>

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

export default DashboardForConsumerGroupShoppingList;
