import React, { Component } from 'react';

import PublicHeader from './../../headers/PublicHeader';
import MarketingNav from './../../navs/MarketingNav';
import PublicFooter from './../../footers/PublicFooter';

export class MarketingForProvider extends Component {
  render() {
    return (
      <div>
        <PublicHeader />
        <h2>Provider Marketing</h2>
        <MarketingNav />
        <PublicFooter />
      </div>
    );
  }
}

export default MarketingForProvider;
