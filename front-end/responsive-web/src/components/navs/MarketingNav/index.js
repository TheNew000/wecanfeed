import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MarketingNav extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to='/'>How WeCanFeed can help</Link>
        </li>
        <li>
          <Link to='/we-can-help-you-sell'>Help you sell</Link>
        </li>
        <li>
          <Link to='/we-can-help-you-buy'>Help you buy</Link>
        </li>
        <li>
          <Link to='/we-can-help-you-buy-for-less'>Help you buy for less</Link>
        </li>
      </ul>
    );
  }
}

export default MarketingNav;
