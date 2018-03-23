import mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import Order from '../../src/mongoose/order';
import Product from '../../src/mongoose/product';

const {
  timestamps,
  audit,
  provider,
  consumer,
  consumerGroup,
  products
} = Order.Schema.obj;

describe('Order Model and Schema', () => {

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

  it('should define the provider property model', () => {
    expect(provider.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal mongoose.Schema.Types.ObjectId');
    expect(provider.ref).to.equal('Provider', 'Expected type to equal Provider');
    expect(provider.required).to.equal(false, 'Expected required to equal false');
    expect(provider.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the consumer property model', () => {
    expect(consumer.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal mongoose.Schema.Types.ObjectId');
    expect(consumer.ref).to.equal('Consumer', 'Expected type to equal Consumer');
    expect(consumer.required).to.equal(false, 'Expected required to equal false');
    expect(consumer.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the consumerGroup property model', () => {
    expect(consumerGroup.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal mongoose.Schema.Types.ObjectId');
    expect(consumerGroup.ref).to.equal('ConsumerGroup', 'Expected type to equal ConsumerGroup');
    expect(consumerGroup.required).to.equal(false, 'Expected required to equal false');
    expect(consumerGroup.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the provider property model', () => {
    expect(provider.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal mongoose.Schema.Types.ObjectId');
    expect(provider.ref).to.equal('Provider', 'Expected type to equal Provider');
    expect(provider.required).to.equal(false, 'Expected required to equal false');
    expect(provider.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the products property model', () => {
    expect(products.type[0]).to.equal(Product.Schema, 'Expected type to equal Product.Schema');
    expect(products.required).to.equal(false, 'Expected required to equal false');
    expect(products.unique).to.equal(false, 'Expected unique to equal false');
  });


});
