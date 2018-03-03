import mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import Donation from '../../src/domain-model/donation';
import DonationReceipt from '../../src/domain-model/donation-receipt';
import donationReceipt from '../../mocks/donation-receipt';

const {
  timestamps,
  donation,
  authorizations
} = DonationReceipt.Schema.obj;

describe('DonationReceipt Model and Schema', () => {

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

  it('should define the claimedAt property model', () => {
    expect(timestamps.claimedAt.type).to.equal(Date, 'Expected type to equal Date');
    expect(timestamps.claimedAt.required).to.equal(false, 'Expected required to equal false');
    expect(timestamps.claimedAt.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the transferredAt property model', () => {
    expect(timestamps.transferredAt.type).to.equal(Date, 'Expected type to equal Date');
    expect(timestamps.transferredAt.required).to.equal(false, 'Expected required to equal false');
    expect(timestamps.transferredAt.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the donation property model', () => {
    expect(donation.type).to.equal(Donation.Schema, 'Expected type to equal Donation.Schema');
    expect(donation.required).to.equal(true, 'Expected required to equal true');
    expect(donation.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the createdBy property model', () => {
    expect(authorizations.createdBy.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(authorizations.createdBy.ref).to.equal('User', 'Expected ref to equal User');
    expect(authorizations.createdBy.required).to.equal(true, 'Expected required to equal false');
    expect(authorizations.createdBy.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the claimedBy property model', () => {
    expect(authorizations.claimedBy.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(authorizations.claimedBy.ref).to.equal('User', 'Expected ref to equal User');
    expect(authorizations.claimedBy.required).to.equal(false, 'Expected required to equal false');
    expect(authorizations.claimedBy.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the transferredBy property model', () => {
    expect(authorizations.transferredBy.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(authorizations.transferredBy.ref).to.equal('User', 'Expected ref to equal User');
    expect(authorizations.transferredBy.required).to.equal(false, 'Expected required to equal false');
    expect(authorizations.transferredBy.unique).to.equal(false, 'Expected unique to equal false');
  });

});
