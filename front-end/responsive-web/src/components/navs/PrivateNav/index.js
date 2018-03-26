import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PrivateNav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <div>Search</div>
          </li>
          <li>
            <Link to='/sign-in'>Sign Out</Link>
          </li>
          <li>
            <Link to='/dashboard/consumer'>Comsumer Specifics</Link>
          </li>
          <li>
            <Link to='/dashboard/consumer-group'>Comsumer Group Specifics</Link>
          </li>
          <li>
            <Link to='/dashboard/provider'>Provider Specifics</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default PrivateNav;
