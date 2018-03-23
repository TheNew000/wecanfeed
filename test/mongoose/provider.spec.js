import mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import Provider from '../../src/mongoose/provider';
import Location from '../../src/mongoose/location';
import Contact from '../../src/mongoose/contact';
import Product from '../../src/mongoose/product';

const {
  timestamps,
  audit,
  name,
  description,
  contacts,
  inventory,
  industryVerticals,
  donationAgreements,
  offersDonations,
  orders,
  location,
  team
} = Provider.Schema.obj;

describe('Provider Mongoose Model and Schema', () => {

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

  it('should define the name property model', () => {
    expect(name.type).to.equal(String, 'Expected type to equal String');
    expect(name.required).to.equal(true, 'Expected required to equal true');
    expect(name.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the description property model', () => {
    expect(description.type).to.equal(String, 'Expected type to equal String');
    expect(description.required).to.equal(false, 'Expected required to equal false');
    expect(description.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the industryVerticals property model', () => {
    expect(industryVerticals.type[0]).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(industryVerticals.ref).to.equal('Tag', 'Expected ref to equal User');
    expect(industryVerticals.required).to.equal(true, 'Expected required to equal true');
    expect(industryVerticals.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the inventory property model', () => {
    expect(inventory.type[0]).to.equal(Product.Schema, 'Expected type to equal Product.Schema');
    expect(inventory.required).to.equal(false, 'Expected required to equal false');
    expect(inventory.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the contacts property model', () => {
    expect(contacts.type[0]).to.equal(Contact.Schema, 'Expected type to equal Contact.Schema');
    expect(contacts.required).to.equal(false, 'Expected required to equal false');
    expect(contacts.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the offersDonations property model', () => {
    expect(offersDonations.type).to.equal(Boolean, 'Expected type to equal Product.Schema');
    expect(offersDonations.required).to.equal(true, 'Expected required to equal true');
    expect(offersDonations.unique).to.equal(false, 'Expected unique to equal false');
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

  it('should define the order.fulfilled property model', () => {
    expect(orders.fulfilled.type[0]).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(orders.fulfilled.ref).to.equal('Order', 'Expected ref to equal User');
    expect(orders.fulfilled.required).to.equal(false, 'Expected required to equal false');
    expect(orders.fulfilled.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the order.pending property model', () => {
    expect(orders.pending.type[0]).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(orders.pending.ref).to.equal('Order', 'Expected ref to equal User');
    expect(orders.pending.required).to.equal(false, 'Expected required to equal false');
    expect(orders.pending.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the team.contacts.primary property model', () => {
    expect(team.contacts.primary.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(team.contacts.primary.ref).to.equal('User', 'Expected ref to equal User');
    expect(team.contacts.primary.required).to.equal(false, 'Expected required to equal false');
    expect(team.contacts.primary.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the team.contacts.secondary property model', () => {
    expect(team.contacts.secondary.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(team.contacts.secondary.ref).to.equal('User', 'Expected ref to equal User');
    expect(team.contacts.secondary.required).to.equal(false, 'Expected required to equal false');
    expect(team.contacts.secondary.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the admins property model', () => {
    expect(team.admins.type[0]).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(team.admins.ref).to.equal('User', 'Expected ref to equal User');
    expect(team.admins.required).to.equal(false, 'Expected required to equal false');
    expect(team.admins.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the members property model', () => {
    expect(team.members.type[0]).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(team.members.ref).to.equal('User', 'Expected ref to equal User');
    expect(team.members.required).to.equal(false, 'Expected required to equal false');
    expect(team.members.unique).to.equal(false, 'Expected unique to equal false');
  });

});
