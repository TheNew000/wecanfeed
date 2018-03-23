import mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import Contact from '../../src/mongoose/contact';

const {
  timestamps,
  audit,
  name,
  value,
  type,
  isPreferred
} = Contact.Schema.obj;

describe('Contact Model and Schema', () => {

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

  it('should define the name property model', () => {
    expect(name.type).to.equal(String, 'Expected type to equal String');
    expect(name.required).to.equal(true, 'Expected required to equal true');
    expect(name.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the value property model', () => {
    expect(value.type).to.equal(String, 'Expected type to equal String');
    expect(value.required).to.equal(true, 'Expected required to equal true');
    expect(value.unique).to.equal(true, 'Expected unique to equal true');
  });

  it('should define the type property model', () => {
    expect(type.type).to.equal(String, 'Expected type to equal String');
    expect(type.enum.length).to.equal(4, 'Expected type to have 5 records');
    expect(type.enum[0]).to.equal('email', 'Expected enum to include email');
    expect(type.enum[1]).to.equal('href', 'Expected enum to include href');
    expect(type.enum[2]).to.equal('voice', 'Expected enum to include voice');
    expect(type.enum[3]).to.equal('text', 'Expected enum to include text');
    expect(type.required).to.equal(true, 'Expected required to equal true');
    expect(type.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the isPreferred property model', () => {
    expect(isPreferred.type).to.equal(Boolean, 'Expected type to equal Boolean');
    expect(isPreferred.required).to.equal(true, 'Expected required to equal true');
    expect(isPreferred.unique).to.equal(false, 'Expected unique to equal false');
  });

});
