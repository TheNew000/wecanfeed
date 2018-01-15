import * as mongoose from 'mongoose';
import * as Promise from 'bluebird'

import config from '../config';
import resetCollections from './helpers/reset-collections';
import seedHarness from './helpers/seed-harness';
import closeConnection from './helpers/close-connection';
import populateMockArrays from './helpers/populate-mock-arrays';

import User from '../src/domain-model/user';
import user from '../mocks/user';

import DonationConsumer from '../src/domain-model/donation-consumer';
import donationConsumer from '../mocks/donation-consumer';

import DonationProvider from '../src/domain-model/donation-provider';
import donationProvider from '../mocks/donation-provider';

const domainModel = [
  DonationProvider,
  DonationConsumer,
  User
];

mongoose.connect(config.database.url, { useMongoClient: true });
(<any>mongoose).Promise = Promise;

resetCollections(domainModel);

console.log('Preparing to seed database.');
Promise.all([
  seedHarness(User.Model, [user]),
  seedHarness(DonationProvider.Model, populateMockArrays(50, donationProvider)),
  seedHarness(DonationConsumer.Model, populateMockArrays(500, donationConsumer))
]).then(() => {
  console.log('All seeds completed.');
  closeConnection(mongoose.connection);
}).catch((error) => {
  console.error('Seeding failed.', error);
  resetCollections(domainModel);
  closeConnection(mongoose.connection);
});
