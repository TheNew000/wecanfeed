import React, { Component } from 'react';

import PrivateHeader from './../../headers/PrivateHeader';
import PrivateFooter from './../../footers/PrivateFooter';

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <PrivateHeader />
        <h2>Dashboard</h2>
        <PrivateFooter />
      </div>
    );
  }
}

export default Dashboard;
