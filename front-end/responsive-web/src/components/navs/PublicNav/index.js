import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PublicNav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/sign-in'>Sign In</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/'>How WeCanFeed can help</Link>
          </li>
          <li>
            <div>Search</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default PublicNav;
