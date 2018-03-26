import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PrivateHeader from './../../headers/PrivateHeader';
import PrivateFooter from './../../footers/PrivateFooter';

export class DashboardForConsumerOrder extends Component {
  render() {
    return (
      <div>
        <PrivateHeader />
        <h2>Consumer Order Dashboard</h2>
        <ul>
          <li><Link to='/dashboard/consumer'>ConsumerDashboard</Link></li>
          <li><Link to='/dashboard/consumer/shopping-list'>ConsumerShoppingListDashboard</Link></li>
          <li><Link to='/dashboard/consumer/orders'>ConsumerOrderDashboard</Link></li>
          <li><Link to='/dashboard/consumer/donations'>ConsumerDonationDashboard</Link></li>
        </ul>
        <ul>
          <li>Inspect local inventory</li>
          <li>Initial order</li>
          <li>Mark order as fulfilled</li>
        </ul>
        <PrivateFooter />
      </div>
    );
  }
}

export default DashboardForConsumerOrder;
