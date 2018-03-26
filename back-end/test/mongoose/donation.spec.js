import mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import Donation from '../../src/mongoose/donation';
import donation from '../../mocks/donation';

const {
  timestamps,
  audit,
  estimatedValue,
  relativeSize,
  summary,
  image
} = Donation.Schema.obj;

describe('Donation Mongoose Model and Schema', () => {

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

  it('should define the estimatedValue property model', () => {
    expect(estimatedValue.type).to.equal(Number, 'Expected type to equal Number');
    expect(estimatedValue.required).to.equal(true, 'Expected required to equal true');
    expect(estimatedValue.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the relativeSize property model', () => {
    expect(relativeSize.type).to.equal(String, 'Expected type to equal String');
    expect(relativeSize.enum.length).to.equal(5, 'Expected type to have 5 records');
    expect(relativeSize.enum[0]).to.equal('few-bags', 'Expected enum to include few-bags');
    expect(relativeSize.enum[1]).to.equal('many-bags', 'Expected enum to include many-bags');
    expect(relativeSize.enum[2]).to.equal('car-full', 'Expected enum to include car-full');
    expect(relativeSize.enum[3]).to.equal('van-full', 'Expected enum to include van-full');
    expect(relativeSize.enum[4]).to.equal('box-truck', 'Expected enum to include box-truck');
    expect(relativeSize.required).to.equal(true, 'Expected required to equal true');
    expect(relativeSize.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the summary property model', () => {
    expect(summary.type).to.equal(String, 'Expected type to equal String');
    expect(summary.required).to.equal(false, 'Expected required to equal false');
    expect(summary.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the image property model', () => {
    expect(image.type).to.equal(String, 'Expected type to equal String');
    expect(image.required).to.equal(false, 'Expected required to equal false');
    expect(image.unique).to.equal(false, 'Expected unique to equal false');
  });

});
