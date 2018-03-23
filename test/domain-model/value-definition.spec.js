import mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import ValueDefinition from '../../src/mongoose/value-definition';

const {
  timestamps,
  audit,
  price,
  quantityRange,
  quantityUnit
} = ValueDefinition.Schema.obj;

describe('DonationAgreementNote Model and Schema', () => {

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

  it('should define the price property model', () => {
    expect(price.type).to.equal(Number, 'Expected type to equal Number');
    expect(price.required).to.equal(true, 'Expected required to equal true');
    expect(price.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the quantityRange property model', () => {
    expect(quantityRange.type[0]).to.equal(Number, 'Expected type to equal Number');
    expect(quantityRange.required).to.equal(true, 'Expected required to equal true');
    expect(quantityRange.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the quantityUnit property model', () => {
    expect(quantityUnit.type).to.equal(String, 'Expected type to equal String');
    expect(quantityUnit.required).to.equal(true, 'Expected required to equal true');
    expect(quantityUnit.unique).to.equal(false, 'Expected unique to equal false');
  });

});
