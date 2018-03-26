import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PrivateHeader from './../../headers/PrivateHeader';
import PrivateFooter from './../../footers/PrivateFooter';

export class DashboardForConsumerGroupTeam extends Component {
  render() {
    return (
      <div>
        <PrivateHeader />
        <h2>Consumer Group Team Dashboard</h2>
        <ul>
          <li><Link to='/dashboard/consumer-group'>ConsumerGroupDashboard</Link></li>
          <li><Link to='/dashboard/consumer-group/shopping-list'>ConsumerGroupShoppingListDashboard</Link></li>
          <li><Link to='/dashboard/consumer-group/team'>ConsumerGroupTeamDashboard</Link></li>
          <li><Link to='/dashboard/consumer-group/orders'>ConsumerGroupOrderDashboard</Link></li>
          <li><Link to='/dashboard/consumer-group/donations'>ConsumerGroupDonationDashboard</Link></li>
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

export default DashboardForConsumerGroupTeam;
