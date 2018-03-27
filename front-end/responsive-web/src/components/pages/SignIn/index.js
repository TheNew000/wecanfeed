import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PublicHeader from './../../headers/PublicHeader';
import PublicFooter from './../../footers/PublicFooter';

import {
  Page,
  Content
} from './../../../design-language/components/layout';

import {
  GenericFirstHeader
} from './../../../design-language/elements';

export class SignIn extends Component {
  render() {
    return (
      <Page className="page">
        <PublicHeader />

        <Content className="content">
          <GenericFirstHeader>Sign In</GenericFirstHeader>
          <Link to='/dashboard'>Sign In To Dashboard</Link>
        </Content>

        <PublicFooter />
      </Page>
    );
  }
}


export default SignIn;
