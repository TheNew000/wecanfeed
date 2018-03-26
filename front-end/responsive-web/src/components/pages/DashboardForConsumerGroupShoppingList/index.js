import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PrivateHeader from './../../headers/PrivateHeader';
import PrivateFooter from './../../footers/PrivateFooter';

export class DashboardForConsumerGroupShoppingList extends Component {
  render() {
    return (
      <div>
        <PrivateHeader />
        <h2>Consumer Group Shopping List Dashboard</h2>
        <ul>
          <li><Link to='/dashboard/consumer-group'>ConsumerGroupDashboard</Link></li>
          <li><Link to='/dashboard/consumer-group/shopping-list'>ConsumerGroupShoppingListDashboard</Link></li>
          <li><Link to='/dashboard/consumer-group/team'>ConsumerGroupTeamDashboard</Link></li>
          <li><Link to='/dashboard/consumer-group/orders'>ConsumerGroupOrderDashboard</Link></li>
          <li><Link to='/dashboard/consumer-group/donations'>ConsumerGroupDonationDashboard</Link></li>
        </ul>

        <ul>
          <li>Add product</li>
          <li>Update product</li>
        </ul>
        <PrivateFooter />
      </div>
    );
  }
}

export default DashboardForConsumerGroupShoppingList;
