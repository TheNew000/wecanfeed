import { expect } from 'chai';
import 'mocha';

import Location from '../../../src/graphql/types/location';

describe('Location GraphQL type definition', () => {

  it('should have correct properties', () => {
    expect(Location.includes('_id: String')).to.be.true;
  });

});
