import React, { Component } from 'react';

import PrivateNav from './../../navs/PrivateNav';

class PrivateHeader extends Component {
  render() {
    return (
      <div>
        <header>
          <PrivateNav />
        </header>
      </div>
    );
  }
}

export default PrivateHeader;
