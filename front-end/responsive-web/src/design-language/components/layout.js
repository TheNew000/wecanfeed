import styled from 'styled-components';

import whitespace from './../../design-language/whitespace';

export const Content = styled.section`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: ${whitespace.more};
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const Screen = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex: 1 1 auto;
`;

export const WeCanFeedLogo = styled.div`
  font-size: 2.4rem;
  padding: ${whitespace.less};
`;

export const Search = styled.section`
  padding: 1rem;
  background: #454545;
  color: #fff;
  border-top: 1px solid #000;
  flex-basis: 100%;
  text-align: center;
`;
