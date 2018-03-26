import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PrivateHeader from './../../headers/PrivateHeader';
import PrivateFooter from './../../footers/PrivateFooter';

export class DashboardForConsumerDonation extends Component {
  render() {
    return (
      <div>
        <PrivateHeader />
        <h2>Consumer Donation Dashboard</h2>
        <ul>
          <li><Link to='/dashboard/consumer'>ConsumerDashboard</Link></li>
          <li><Link to='/dashboard/consumer/shopping-list'>ConsumerShoppingListDashboard</Link></li>
          <li><Link to='/dashboard/consumer/orders'>ConsumerOrderDashboard</Link></li>
          <li><Link to='/dashboard/consumer/donations'>ConsumerDonationDashboard</Link></li>
        </ul>
        <ul>
          <li>List donation offerings</li>
          <li>Initiate donation agreement</li>
          <li>Cancel donation agreement</li>
          <li>Claim donation</li>
          <li>Update donation status</li>
          <li>Add donation agreement note</li>
        </ul>
        <PrivateFooter />
      </div>
    );
  }
}

export default DashboardForConsumerDonation;
