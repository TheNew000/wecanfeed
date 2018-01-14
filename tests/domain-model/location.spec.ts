import * as mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import Location from '../../src/domain-model/location';
import location from '../../mocks/location';

const {
  timestamps,
  streetAddress,
  city,
  state,
  zipcode,
  coordinates
} = Location.Schema.obj;

describe('Location Model and Schema', () => {

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

  it('should define the address.primary property model', () => {
    expect(streetAddress.primary.type).to.equal(String, 'Expected type to equal String');
    expect(streetAddress.primary.required).to.equal(true, 'Expected required to equal true');
    expect(streetAddress.primary.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the address.secondary property model', () => {
    expect(streetAddress.secondary.type).to.equal(String, 'Expected type to equal String');
    expect(streetAddress.secondary.required).to.equal(false, 'Expected required to equal false');
    expect(streetAddress.secondary.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the city property model', () => {
    expect(city.type).to.equal(String, 'Expected type to equal String');
    expect(city.required).to.equal(true, 'Expected required to equal true');
    expect(city.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the state property model', () => {
    expect(state.type).to.equal(String, 'Expected type to equal String');
    expect(state.required).to.equal(true, 'Expected required to equal true');
    expect(state.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the zipcode property model', () => {
    expect(zipcode.type).to.equal(Number, 'Expected type to equal String');
    expect(zipcode.required).to.equal(true, 'Expected required to equal true');
    expect(zipcode.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the coordinates.latitude property model', () => {
    expect(coordinates.latitude.type).to.equal(Number, 'Expected type to equal String');
    expect(coordinates.latitude.required).to.equal(true, 'Expected required to equal true');
    expect(coordinates.latitude.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the coordinates.longitude property model', () => {
    expect(coordinates.longitude.type).to.equal(Number, 'Expected type to equal String');
    expect(coordinates.longitude.required).to.equal(true, 'Expected required to equal true');
    expect(coordinates.longitude.unique).to.equal(false, 'Expected unique to equal false');
  });

});
