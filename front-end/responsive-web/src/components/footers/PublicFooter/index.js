import React, { Component } from 'react';
import { Search } from './../../../design-language/components/layout';

import {
  Footer,
  FooterLinkGroup
} from './../../../design-language/components/footers';

class PublicFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterLinkGroup>Customer service contact</FooterLinkGroup>
        <FooterLinkGroup>Marketing list subscription</FooterLinkGroup>
        <FooterLinkGroup>Social links</FooterLinkGroup>
        <Search>Search</Search>
      </Footer>
    );
  }
}

export default PublicFooter;
