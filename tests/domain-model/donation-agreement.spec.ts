import * as mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import DonationAgreement from '../../src/domain-model/donation-agreement';
import DonationAgreementNote from '../../src/domain-model/donation-agreement-note';
import DonationReceipt from '../../src/domain-model/donation-receipt';
import donationAgreement from '../../mocks/donation-agreement';

const {
  timestamps,
  notes,
  receipts
} = DonationAgreement.Schema.obj;

describe('DonationAgreement Model and Schema', () => {

  it('should define the createdAt property model', () => {
    expect(timestamps.createdAt.type).to.equal(Date, 'Expected type to equal Date');
    expect(timestamps.createdAt.required).to.equal(true, 'Expected required to equal true');
    expect(timestamps.createdAt.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the updatedAt property model', () => {
    expect(timestamps.updatedAt.type).to.equal(Date, 'Expected type to equal Date');
    expect(timestamps.updatedAt.required).to.equal(true, 'Expected required to equal true');
    expect(timestamps.updatedAt.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the revokedAt property model', () => {
    expect(timestamps.revokedAt.type).to.equal(Date, 'Expected type to equal Date');
    expect(timestamps.revokedAt.required).to.equal(false, 'Expected required to equal false');
    expect(timestamps.revokedAt.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the notes property model', () => {
    expect(notes.type[0]).to.equal(DonationAgreementNote.Schema, 'Expected type to equal DonationAgreementNote.Schema');
    expect(notes.required).to.equal(false, 'Expected required to equal false');
    expect(notes.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the receipts property model', () => {
    expect(receipts.type[0]).to.equal(DonationReceipt.Schema, 'Expected type to equal DonationReceipt.Schema');
    expect(receipts.required).to.equal(false, 'Expected required to equal false');
    expect(receipts.unique).to.equal(false, 'Expected unique to equal false');
  });

});
