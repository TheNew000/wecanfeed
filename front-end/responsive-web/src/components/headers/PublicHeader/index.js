import React, { Component } from 'react';

import PublicNav from './../../navs/PublicNav';

class PublicHeader extends Component {
  render() {
    return (
      <div>
        <header>
          <PublicNav />
        </header>
      </div>
    );
  }
}

export default PublicHeader;
