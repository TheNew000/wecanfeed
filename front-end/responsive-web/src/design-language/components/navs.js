import styled from 'styled-components';

import colors from './../../design-language/colors';
import whitespace from './../../design-language/whitespace';

export const Nav = styled.nav`
  padding: ${whitespace.less};
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
