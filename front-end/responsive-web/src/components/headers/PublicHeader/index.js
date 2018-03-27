import React, { Component } from 'react';
import styled from 'styled-components';

import PublicNav from './../../navs/PublicNav';

import { Header } from './../../../design-language/components/headers';
import {
  WeCanFeedLogo as Logo
 } from './../../../design-language/components/layout';

class PublicHeader extends Component {
  render() {
    return (
      <Header>
        <Logo>We Can Feed!</Logo>
        <PublicNav />
      </Header>
    );
  }
}

export default PublicHeader;
