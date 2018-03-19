import mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import Consumer from '../../src/domain-model/consumer';
import Location from '../../src/domain-model/location';
import Product from '../../src/domain-model/product';
import Contact from '../../src/domain-model/contact';


const {
  timestamps,
  audit,
  account,
  industryVerticals,
  shoppingList,
  acceptsDonations,
  donationAgreements,
  location
} = Consumer.Schema.obj;

describe('Consumer Model and Schema', () => {

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

  it('should define the account property model', () => {
    expect(account.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(account.ref).to.equal('User', 'Expected ref to equal User');
    expect(account.required).to.equal(true, 'Expected required to equal true');
    expect(account.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the shoppingList property model', () => {
    expect(shoppingList.type[0]).to.equal(Product.Schema, 'Expected type to equal Product.Schema');
    expect(shoppingList.required).to.equal(false, 'Expected required to equal false');
    expect(shoppingList.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the acceptsDonations property model', () => {
    expect(acceptsDonations.type).to.equal(Boolean, 'Expected type to equal Boolean');
    expect(acceptsDonations.required).to.equal(true, 'Expected required to equal true');
    expect(acceptsDonations.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the donationAgreements property model', () => {
    expect(donationAgreements.type[0]).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(donationAgreements.ref).to.equal('DonationAgreement', 'Expected ref to equal DonationAgreement');
    expect(donationAgreements.required).to.equal(false, 'Expected required to equal false');
    expect(donationAgreements.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the location property model', () => {
    expect(location.type).to.equal(Location.Schema, 'Expected type to equal Location.Schema');
    expect(location.required).to.equal(true, 'Expected required to equal true');
    expect(location.unique).to.equal(false, 'Expected unique to equal false');
  });

});
