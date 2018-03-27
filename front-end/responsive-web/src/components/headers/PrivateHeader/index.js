import React, { Component } from 'react';

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
