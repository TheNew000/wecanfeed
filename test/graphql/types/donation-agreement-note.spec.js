import { expect } from 'chai';
import 'mocha';

import DonationAgreementNote from '../../../src/graphql/types/donation-agreement-note';

describe('DonationAgreementNote GraphQL type definition', () => {

  it('should have correct properties', () => {
    expect(DonationAgreementNote.includes('_id: String')).to.be.true;
  });

});
