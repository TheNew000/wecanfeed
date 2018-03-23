import { expect } from 'chai';
import 'mocha';

import DonationReceipt from '../../../src/graphql/types/donation-receipt';

describe('DonationReceipt GraphQL type definition', () => {

  it('should have correct properties', () => {
    expect(DonationReceipt.includes('_id: String')).to.be.true;
  });

});
