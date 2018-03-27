import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Nav } from './../../../design-language/components/navs';
import whitespace from './../../../design-language/whitespace';

const style = {
  padding: `0 ${whitespace.standard}`,
  textDecoration: 'none'
};

class PublicNav extends Component {
  render() {
    return (
      <Nav>
        <Link style={style} to='/sign-in'>Sign In</Link>
        <Link style={style} to='/register'>Register</Link>
        <Link style={style} to='/'>How WeCanFeed can help</Link>
      </Nav>
    );
  }
}

export default PublicNav;
