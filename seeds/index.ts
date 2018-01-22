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

import DonationAgreement from '../src/domain-model/donation-agreement';
import donationAgreement from '../mocks/donation-agreement';

import DonationReceipt from '../src/domain-model/donation-receipt';
import donationReceipt from '../mocks/donation-receipt';

import donationAgreementNote from '../mocks/donation-agreement-note';

const domainModel = [
  DonationProvider,
  DonationConsumer,
  DonationAgreement,
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

const agreementCount = providerCount * 2;

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
        Promise.all(
          seedHarness(DonationAgreement.Model, populateMockArrays(agreementCount, donationAgreement))
        ).then((agreements) => {
          agreements.map((agreement) => {
            const provider = faker.random.arrayElement(providers);
            const consumer = faker.random.arrayElement(consumers);

            provider.agreements.push(agreement.id);
            consumer.agreements.push(agreement.id);

            const commentByOrg = faker.random.arrayElement([provider, consumer]);
            const commentByUserType = faker.random.arrayElement(['admins', 'contributors', 'transporters']);
            const commentByUser = faker.random.arrayElement(commentByOrg.team[commentByUserType]);

            const receiptByUserType = faker.random.arrayElement(['admins', 'contributors', 'transporters']);
            const receiptByProviderUser = faker.random.arrayElement(provider.team[commentByUserType]);
            const receiptByConsumerUser = faker.random.arrayElement(consumer.team[commentByUserType]);

            const noteCount = faker.random.arrayElement([1, 3, 7, 12]);
            const receiptCount = faker.random.arrayElement([3, 7, 12, 26]);

            for (let i = 0; i < noteCount; i++) {
              agreement.notes.push(donationAgreementNote(commentByUser));
            }

            for (let i = 0; i < receiptCount; i++) {
              agreement.receipts.push(donationReceipt(receiptByProviderUser, receiptByConsumerUser));
            }
          });

          Promise.all([
            ...(providers.map((provider) => provider.save())),
            ...(consumers.map((consumer) => consumer.save())),
            ...(agreements.map((agreement) => agreement.save()))
          ]).then(() => {
            console.log('All seeds completed.');
            closeConnection(mongoose.connection);
          });
        });
      });
    });
  });
});
