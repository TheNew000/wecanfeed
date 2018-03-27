import React, { Component } from 'react';
import styled from 'styled-components';

import PrivateNav from './../../navs/PrivateNav';

import { Header } from './../../../design-language/components/headers';

class PrivateHeader extends Component {
  render() {
    return (
      <Header>
        <PrivateNav />
      </Header>
    );
  }
}

export default PrivateHeader;
