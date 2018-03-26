import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PublicHeader from './../../headers/PublicHeader';
import PublicFooter from './../../footers/PublicFooter';

export class Register extends Component {
  render() {
    return (
      <div>
        <PublicHeader />
        <h2>Register</h2>
        <Link to='/dashboard'>Register Account</Link>
        <PublicFooter />
      </div>
    );
  }
}

export default Register;
