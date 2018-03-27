import styled from 'styled-components';

import colors from './../../design-language/colors';

export const Footer = styled.footer`
  background: ${colors.backgrounds.lightGray};
  border-top: 1px solid #000;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
`;

export const FooterLinkGroup = styled.div`
  margin: 1rem;
  flex: 1 1 auto;
  height: 7.5rem;
`;
