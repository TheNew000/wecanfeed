import React, { Component } from 'react';

import PublicHeader from './../../headers/PublicHeader';
import MarketingNav from './../../navs/MarketingNav';
import PublicFooter from './../../footers/PublicFooter';

export class Marketing extends Component {
  render() {
    return (
      <div>
        <PublicHeader />
        <h2>Marketing</h2>
        <MarketingNav />
        <PublicFooter />
      </div>
    );
  }
}

export default Marketing;
