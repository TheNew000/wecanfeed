import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PrivateHeader from './../../headers/PrivateHeader';
import PrivateFooter from './../../footers/PrivateFooter';

export class DashboardForProviderInventory extends Component {
  render() {
    return (
      <div>
        <PrivateHeader />
        <h2>Provider Inventory Dashboard</h2>
        <ul>
          <li><Link to='/dashboard/provider'>ProviderDashboard</Link></li>
          <li><Link to='/dashboard/provider/inventory'>ProviderInventoryDashboard</Link></li>
          <li><Link to='/dashboard/provider/team'>ProviderTeamDashboard</Link></li>
          <li><Link to='/dashboard/provider/orders'>ProviderOrderDashboard</Link></li>
          <li><Link to='/dashboard/provider/donations'>ProviderDonationDashboard</Link></li>
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

export default DashboardForProviderInventory;
