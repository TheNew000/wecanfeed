import mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import User from '../../src/mongoose/user';
import user, { staticEmailUser } from '../../mocks/user';
import Contact from '../../src/mongoose/contact';

const {
  timestamps,
  audit,
  name,
  username,
  email,
  contacts
} = User.Schema.obj;

describe('User Model and Schema', () => {

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

  it('should define the updatedWith property model', () => {
    expect(audit.updatedWith.type).to.equal(String, 'Expected type to equal String');
    expect(audit.updatedWith.required).to.equal(false, 'Expected required to equal false');
    expect(audit.updatedWith.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the first property model', () => {
    expect(name.first.type).to.equal(String, 'Expected type to equal String');
    expect(name.first.required).to.equal(true, 'Expected required to equal true');
    expect(name.first.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the last property model', () => {
    expect(name.last.type).to.equal(String, 'Expected type to equal String');
    expect(name.last.required).to.equal(true, 'Expected required to equal true');
    expect(name.last.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the username property model', () => {
    expect(username.type).to.equal(String, 'Expected type to equal String');
    expect(username.required).to.equal(true, 'Expected required to equal true');
    expect(username.unique).to.equal(true, 'Expected unique to equal true');
  });

  it('should define the email property model', () => {
    expect(email.type).to.equal(String, 'Expected type to equal String');
    expect(email.required).to.equal(true, 'Expected required to equal true');
    expect(email.unique).to.equal(true, 'Expected unique to equal true');
  });

  it('should define the contacts property model', () => {
    expect(contacts.type[0]).to.equal(Contact.Schema, 'Expected type to equal Contact.Schema');
    expect(contacts.required).to.equal(false, 'Expected required to equal false');
    expect(contacts.unique).to.equal(false, 'Expected unique to equal false');
  });

});
