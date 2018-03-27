import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PublicNav from './../../navs/PublicNav';

import { Header } from './../../../design-language/components/headers';
import {
  WeCanFeedLogo as Logo
 } from './../../../design-language/components/layout';

 const linkStyles = {
   textDecoration: 'none'
 };

class PublicHeader extends Component {
  render() {
    return (
      <Header>
        <Link style={linkStyles} to='/'>
          <Logo>We Can Feed!</Logo>
        </Link>

        <PublicNav />
      </Header>
    );
  }
}

export default PublicHeader;
