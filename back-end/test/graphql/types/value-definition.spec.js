import { expect } from 'chai';
import 'mocha';

import ValueDefinition from '../../../src/graphql/types/value-definition';

describe('ValueDefinition GraphQL type definition', () => {

  it('should have correct properties', () => {
    expect(ValueDefinition.includes('_id: String')).to.be.true;
  });

});
