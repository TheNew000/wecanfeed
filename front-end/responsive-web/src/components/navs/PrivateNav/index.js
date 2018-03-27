import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './../../../design-language/components/navs';
import whitespace from './../../../design-language/whitespace';

const style = {
  padding: `0 ${whitespace.standard}`,
  textDecoration: 'none'
};

class PrivateNav extends Component {
  render() {
    return (
      <Nav>
        <Link style={style} to='/dashboard/provider'>Provider Specifics</Link>
        <Link style={style} to='/dashboard/consumer'>Comsumer Specifics</Link>
        <Link style={style} to='/dashboard/consumer-group'>Comsumer Group Specifics</Link>
        <Link style={style} to='/sign-in'>Sign Out</Link>
      </Nav>
    );
  }
}

export default PrivateNav;
