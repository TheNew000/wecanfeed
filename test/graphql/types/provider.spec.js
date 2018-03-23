import { expect } from 'chai';
import 'mocha';

import Provider from '../../../src/graphql/types/provider';

describe('Provider GraphQL type definition', () => {

  it('should have correct properties', () => {
    expect(Provider.includes('_id: String')).to.be.true;
  });

});
