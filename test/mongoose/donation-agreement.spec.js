import mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import DonationAgreement from '../../src/mongoose/donation-agreement';
import DonationAgreementNote from '../../src/mongoose/donation-agreement-note';
import DonationReceipt from '../../src/mongoose/donation-receipt';
import donationAgreement from '../../mocks/donation-agreement';

const {
  timestamps,
  audit,
  notes,
  receipts
} = DonationAgreement.Schema.obj;

describe('DonationAgreement Mongoose Model and Schema', () => {

  it('should define the createdAt property model', () => {
    expect(timestamps.createdAt.type).to.equal(Date, 'Expected type to equal Date');
    expect(timestamps.createdAt.required).to.equal(true, 'Expected required to equal true');
    expect(timestamps.createdAt.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the updatedAt property model', () => {
    expect(timestamps.updatedAt.type).to.equal(Date, 'Expected type to equal Date');
    expect(timestamps.updatedAt.required).to.equal(false, 'Expected required to equal false');
    expect(timestamps.updatedAt.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the removedAt property model', () => {
    expect(timestamps.removedAt.type).to.equal(Date, 'Expected type to equal Date');
    expect(timestamps.removedAt.required).to.equal(false, 'Expected required to equal false');
    expect(timestamps.removedAt.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the createdBy property model', () => {
    expect(audit.createdBy.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal mongoose.Schema.Types.ObjectId');
    expect(audit.createdBy.ref).to.equal('User', 'Expected type to equal User');
    expect(audit.createdBy.required).to.equal(true, 'Expected required to equal true');
    expect(audit.createdBy.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the updatedBy property model', () => {
    expect(audit.updatedBy.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal mongoose.Schema.Types.ObjectId');
    expect(audit.updatedBy.ref).to.equal('User', 'Expected type to equal User');
    expect(audit.updatedBy.required).to.equal(false, 'Expected required to equal false');
    expect(audit.updatedBy.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the updatedWith property model', () => {
    expect(audit.updatedWith.type).to.equal(String, 'Expected type to equal String');
    expect(audit.updatedWith.required).to.equal(false, 'Expected required to equal false');
    expect(audit.updatedWith.unique).to.equal(false, 'Expected unique to equal false');
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
