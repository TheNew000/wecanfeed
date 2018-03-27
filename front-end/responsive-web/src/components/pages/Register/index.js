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

export class Register extends Component {
  render() {
    return (
      <Page className="page">
        <PublicHeader />

        <Content className="content">
          <GenericFirstHeader>Register</GenericFirstHeader>
          <Link to='/dashboard'>Register Account</Link>
        </Content>

        <PublicFooter />
      </Page>
    );
  }
}

export default Register;
