import { expect } from 'chai';
import 'mocha';

import Donation from '../../../src/graphql/types/donation';

describe('Donation GraphQL type definition', () => {

  it('should have correct properties', () => {
    expect(Donation.includes('_id: String')).to.be.true;
  });

});
