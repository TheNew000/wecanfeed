import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PrivateHeader from './../../headers/PrivateHeader';
import PrivateFooter from './../../footers/PrivateFooter';

class DashboardForConsumerShoppingList extends Component {
  render() {
    return (
      <div>
        <PrivateHeader />
        <h2>Consumer Shopping List Dashboard</h2>
        <ul>
          <li><Link to='/dashboard/consumer'>ConsumerDashboard</Link></li>
          <li><Link to='/dashboard/consumer/shopping-list'>ConsumerShoppingListDashboard</Link></li>
          <li><Link to='/dashboard/consumer/orders'>ConsumerOrderDashboard</Link></li>
          <li><Link to='/dashboard/consumer/donations'>ConsumerDonationDashboard</Link></li>
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

export default DashboardForConsumerShoppingList;
