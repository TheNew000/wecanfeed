import mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import Tag from '../../src/mongoose/tag';

const {
  timestamps,
  audit,
  name,
  key,
  parent
} = Tag.Schema.obj;

describe('Tag Mongoose Model and Schema', () => {

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
    expect(name.unique).to.equal(true, 'Expected unique to equal true');
  });

  it('should define the key property model', () => {
    expect(key.type).to.equal(String, 'Expected type to equal String');
    expect(key.required).to.equal(true, 'Expected required to equal true');
    expect(key.unique).to.equal(true, 'Expected unique to equal true');
  });

  it('should define the parent property model', () => {
    expect(parent.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal mongoose.Schema.Types.ObjectId');
    expect(parent.ref).to.equal('Tag', 'Expected type to equal Tag');
    expect(parent.required).to.equal(false, 'Expected required to equal false');
    expect(parent.unique).to.equal(false, 'Expected unique to equal false');
  });

});
