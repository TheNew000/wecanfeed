import React, { Component } from 'react';

import { Search } from './../../../design-language/components/layout';

class PrivateFooter extends Component {
  render() {
    return (
      <div>
        <footer>
          <Search>Search</Search>
        </footer>
      </div>
    );
  }
}

export default PrivateFooter;
