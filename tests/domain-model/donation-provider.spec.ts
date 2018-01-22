import * as mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import DonationProvider from '../../src/domain-model/donation-provider';
import Location from '../../src/domain-model/location';

import donationProvider from '../../mocks/donation-provider';

const {
  timestamps,
  name,
  summary,
  website,
  agreements,
  location,
  team
} = DonationProvider.Schema.obj;

describe('DonationProvider Model and Schema', () => {

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

  it('should define the name property model', () => {
    expect(name.type).to.equal(String, 'Expected type to equal String');
    expect(name.required).to.equal(true, 'Expected required to equal true');
    expect(name.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the summary property model', () => {
    expect(summary.type).to.equal(String, 'Expected type to equal String');
    expect(summary.required).to.equal(false, 'Expected required to equal false');
    expect(summary.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the website property model', () => {
    expect(website.type).to.equal(String, 'Expected type to equal Date');
    expect(website.required).to.equal(false, 'Expected required to equal false');
    expect(website.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the agreements property model', () => {
    expect(agreements.type[0]).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(agreements.ref).to.equal('DonationAgreement', 'Expected ref to equal DonationAgreement');
    expect(agreements.required).to.equal(false, 'Expected required to equal false');
    expect(agreements.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the location property model', () => {
    expect(location.type).to.equal(Location.Schema, 'Expected type to equal Location.Schema');
    expect(location.required).to.equal(true, 'Expected required to equal true');
    expect(location.unique).to.equal(false, 'Expected unique to equal false');
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

  it('should define the contributors property model', () => {
    expect(team.contributors.type[0]).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(team.contributors.ref).to.equal('User', 'Expected ref to equal User');
    expect(team.contributors.required).to.equal(false, 'Expected required to equal false');
    expect(team.contributors.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the transporters property model', () => {
    expect(team.transporters.type[0]).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(team.transporters.ref).to.equal('User', 'Expected ref to equal User');
    expect(team.transporters.required).to.equal(false, 'Expected required to equal false');
    expect(team.transporters.unique).to.equal(false, 'Expected unique to equal false');
  });

});
