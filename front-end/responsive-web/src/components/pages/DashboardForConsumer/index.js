import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PrivateHeader from './../../headers/PrivateHeader';
import PrivateFooter from './../../footers/PrivateFooter';

export class DashboardForConsumer extends Component {
  render() {
    return (
      <div>
        <PrivateHeader />
        <h2>Consumer Dashboard</h2>
        <ul>
          <li><Link to='/dashboard/consumer'>ConsumerDashboard</Link></li>
          <li><Link to='/dashboard/consumer/shopping-list'>ConsumerShoppingListDashboard</Link></li>
          <li><Link to='/dashboard/consumer/orders'>ConsumerOrderDashboard</Link></li>
          <li><Link to='/dashboard/consumer/donations'>ConsumerDonationDashboard</Link></li>
        </ul>
        <PrivateFooter />
      </div>
    );
  }
}

export default DashboardForConsumer;
