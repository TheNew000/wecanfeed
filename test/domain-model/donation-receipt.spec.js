import mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import Donation from '../../src/mongoose/donation';
import DonationReceipt from '../../src/mongoose/donation-receipt';
import donationReceipt from '../../mocks/donation-receipt';

const {
  timestamps,
  donation,
  audit
} = DonationReceipt.Schema.obj;

describe('DonationReceipt Model and Schema', () => {

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

  it('should define the createdBy property model', () => {
    expect(audit.createdBy.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(audit.createdBy.ref).to.equal('User', 'Expected ref to equal User');
    expect(audit.createdBy.required).to.equal(true, 'Expected required to equal true');
    expect(audit.createdBy.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the updatedBy property model', () => {
    expect(audit.updatedBy.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(audit.updatedBy.ref).to.equal('User', 'Expected ref to equal User');
    expect(audit.updatedBy.required).to.equal(false, 'Expected required to equal false');
    expect(audit.updatedBy.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the updatedWith property model', () => {
    expect(audit.updatedWith.type).to.equal(String, 'Expected type to equal String');
    expect(audit.updatedWith.required).to.equal(false, 'Expected required to equal false');
    expect(audit.updatedWith.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the removedBy property model', () => {
    expect(audit.removedBy.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(audit.removedBy.ref).to.equal('User', 'Expected ref to equal User');
    expect(audit.removedBy.required).to.equal(false, 'Expected required to equal false');
    expect(audit.removedBy.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the claimedBy property model', () => {
    expect(audit.claimedBy.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(audit.claimedBy.ref).to.equal('User', 'Expected ref to equal User');
    expect(audit.claimedBy.required).to.equal(false, 'Expected required to equal false');
    expect(audit.claimedBy.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the transferredBy property model', () => {
    expect(audit.transferredBy.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(audit.transferredBy.ref).to.equal('User', 'Expected ref to equal User');
    expect(audit.transferredBy.required).to.equal(false, 'Expected required to equal false');
    expect(audit.transferredBy.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the donation property model', () => {
    expect(donation.type).to.equal(Donation.Schema, 'Expected type to equal Donation.Schema');
    expect(donation.required).to.equal(true, 'Expected required to equal true');
    expect(donation.unique).to.equal(false, 'Expected unique to equal false');
  });

});
