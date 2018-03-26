import React, { Component } from 'react';

import PublicHeader from './../../headers/PublicHeader';
import MarketingNav from './../../navs/MarketingNav';
import PublicFooter from './../../footers/PublicFooter';

export class MarketingForConsumerGroup extends Component {
  render() {
    return (
      <div>
        <PublicHeader />
        <h2>Consumer Group Marketing</h2>
        <MarketingNav />
        <PublicFooter />
      </div>
    );
  }
}

export default MarketingForConsumerGroup;
