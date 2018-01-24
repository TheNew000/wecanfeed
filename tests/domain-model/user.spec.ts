import * as mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import User from '../../src/domain-model/user';
import user, { staticEmailUser } from '../../mocks/user';

const {
  timestamps,
  name,
  username,
  contact
} = User.Schema.obj;

describe('User Model and Schema', () => {

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
    expect(contact.email.type).to.equal(String, 'Expected type to equal String');
    expect(contact.email.required).to.equal(true, 'Expected required to equal true');
    expect(contact.email.unique).to.equal(true, 'Expected unique to equal true');
  });

  it('should define the voice property model', () => {
    expect(contact.voice.type).to.equal(String, 'Expected type to equal String');
    expect(contact.voice.required).to.equal(false, 'Expected required to equal false');
    expect(contact.voice.unique).to.equal(true, 'Expected unique to equal true');
  });

  it('should define the text property model', () => {
    expect(contact.text.type).to.equal(String, 'Expected type to equal String');
    expect(contact.text.required).to.equal(false, 'Expected required to equal false');
    expect(contact.text.unique).to.equal(true, 'Expected unique to equal true');
  });

  it('should define the preferredType property model', () => {
    expect(contact.preferredType.type).to.equal(String, 'Expected type to equal String');
    expect(contact.preferredType.enum.length).to.equal(3, 'Expected enum to have 3 records');
    expect(contact.preferredType.enum[0]).to.equal('email', 'Expected enum to include email');
    expect(contact.preferredType.enum[1]).to.equal('text', 'Expected enum to include text');
    expect(contact.preferredType.enum[2]).to.equal('voice', 'Expected enum to include voice');
    expect(contact.preferredType.required).to.equal(false, 'Expected required to equal false');
    expect(contact.preferredType.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should a virtual for the preferred contact info', () => {
    expect(staticEmailUser.contact.preferred).to.equal('bob@smith.com', 'Expected preferred to equal bob@smith.com');
  });

});
