import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PrivateHeader from './../../headers/PrivateHeader';
import PrivateFooter from './../../footers/PrivateFooter';

export class DashboardForProviderTeam extends Component {
  render() {
    return (
      <div>
        <PrivateHeader />
        <h2>Provider Team Dashboard</h2>
        <ul>
          <li><Link to='/dashboard/provider'>ProviderDashboard</Link></li>
          <li><Link to='/dashboard/provider/inventory'>ProviderInventoryDashboard</Link></li>
          <li><Link to='/dashboard/provider/team'>ProviderTeamDashboard</Link></li>
          <li><Link to='/dashboard/provider/orders'>ProviderOrderDashboard</Link></li>
          <li><Link to='/dashboard/provider/donations'>ProviderDonationDashboard</Link></li>
        </ul>

        <ul>
          <li>Change team member role</li>
          <li>Invite new member</li>
          <li>Remove team member</li>
        </ul>
        <PrivateFooter />
      </div>
    );
  }
}

export default DashboardForProviderTeam;
