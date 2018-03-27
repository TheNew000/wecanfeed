import React, { Component } from 'react';
import styled from 'styled-components';
import { Search } from './../../../design-language/components/layout';

import {
  Footer,
  FooterLinkGroup
} from './../../../design-language/components/footers';
import colors from './../../../design-language/colors';
import whitespace from './../../../design-language/whitespace';

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
