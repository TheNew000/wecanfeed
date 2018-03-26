import { expect } from 'chai';
import 'mocha';

import DonationAgreement from '../../../src/graphql/types/donation-agreement';

describe('DonationAgreement GraphQL type definition', () => {

  it('should have correct properties', () => {
    expect(DonationAgreement.includes('_id: String')).to.be.true;
  });

});
