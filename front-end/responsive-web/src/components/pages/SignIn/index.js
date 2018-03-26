import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PublicHeader from './../../headers/PublicHeader';
import PublicFooter from './../../footers/PublicFooter';

export class SignIn extends Component {
  render() {
    return (
      <div>
        <PublicHeader />
        <h2>Sign In</h2>
        <Link to='/dashboard'>Sign In To Dashboard</Link>
        <PublicFooter />
      </div>
    );
  }
};

export default SignIn;
