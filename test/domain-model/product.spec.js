import mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import Product from '../../src/domain-model/product';
import ValueDefinition from '../../src/domain-model/value-definition';

const {
  timestamps,
  audit,
  name,
  description,
  category,
  tags,
  prices,
  totalQuantityAvailable
} = Product.Schema.obj;

describe('Product Model and Schema', () => {

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

  it('should define the description property model', () => {
    expect(description.type).to.equal(String, 'Expected type to equal String');
    expect(description.required).to.equal(true, 'Expected required to equal true');
    expect(description.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the category property model', () => {
    expect(category.type).to.equal(String, 'Expected type to equal String');
    expect(category.required).to.equal(true, 'Expected required to equal true');
    expect(category.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the tags property model', () => {
    expect(tags.type[0]).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal mongoose.Schema.Types.ObjectId');
    expect(tags.ref).to.equal('Tag', 'Expected type to equal Tag');
    expect(tags.required).to.equal(true, 'Expected required to equal true');
    expect(tags.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the prices property model', () => {
    expect(prices.type[0]).to.equal(ValueDefinition.Schema, 'Expected type to equal ValueDefinition.Schema');
    expect(prices.required).to.equal(true, 'Expected required to equal true');
    expect(prices.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the totalQuantityAvailable property model', () => {
    expect(totalQuantityAvailable.type).to.equal(Number, 'Expected type to equal Number');
    expect(totalQuantityAvailable.required).to.equal(true, 'Expected required to equal true');
    expect(totalQuantityAvailable.unique).to.equal(false, 'Expected unique to equal false');
  });

});
