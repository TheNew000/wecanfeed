import * as mongoose from 'mongoose';
import * as Promise from 'bluebird'
import * as faker from 'faker';

import config from '../config';
import resetCollections from './helpers/reset-collections';
import seedHarness from './helpers/seed-harness';
import closeConnection from './helpers/close-connection';
import populateMockArrays from './helpers/populate-mock-arrays';
import assignUsers from './helpers/assign-users';

import User from '../src/domain-model/user';

import DonationConsumer from '../src/domain-model/donation-consumer';
import donationConsumer from '../mocks/donation-consumer';

import DonationProvider from '../src/domain-model/donation-provider';
import donationProvider from '../mocks/donation-provider';

const domainModel = [
  DonationProvider,
  DonationConsumer,
  User
];

const providerCount = 50;
const providerAdminCount = 1;
const providerContributorCount = 3;
const providerTransporterCount = 1;

const consumerCount = providerCount * 10;
const consumerAdminCount = 6;
const consumerContributorCount = 18;
const consumerTransporterCount = 4;

mongoose.connect(config.database.url, { useMongoClient: true });
(<any>mongoose).Promise = Promise;

resetCollections(domainModel);

console.log('Preparing to seed database.');

Promise.all(
  seedHarness(DonationProvider.Model, populateMockArrays(providerCount, donationProvider))
).then((providers) => {
  Promise.all([
    assignUsers(providerAdminCount, providers, 'admins', 'primary'),
    assignUsers(providerContributorCount, providers, 'contributors', 'secondary'),
    assignUsers(providerTransporterCount, providers, 'transporters'),
    providers.map((provider) => provider.save())
  ]).then(() => {
    Promise.all(
      seedHarness(DonationConsumer.Model, populateMockArrays(consumerCount, donationConsumer))
    ).then((consumers) => {
      Promise.all([
        assignUsers(consumerAdminCount, consumers, 'admins', 'primary'),
        assignUsers(consumerContributorCount, consumers, 'contributors', 'secondary'),
        assignUsers(consumerTransporterCount, consumers, 'transporters'),
        consumers.map((consumer) => consumer.save())
      ]).then(() => {
        console.log('All seeds completed.');
        closeConnection(mongoose.connection);
      });
    });
  });
});
