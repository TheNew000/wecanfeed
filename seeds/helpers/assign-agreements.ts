import * as faker from 'faker';

import donationReceipt from '../../mocks/donation-receipt';
import donationAgreementNote from '../../mocks/donation-agreement-note';

export default (agreements, providers, consumers) => {
  agreements.map((agreement) => {
    const provider = faker.random.arrayElement(providers);
    const consumer = faker.random.arrayElement(consumers);

    provider.agreements.push(agreement._id);
    consumer.agreements.push(agreement._id);

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

  return Promise.all([
    ...(providers.map((provider) => provider.save())),
    ...(consumers.map((consumer) => consumer.save())),
    ...(agreements.map((agreement) => agreement.save()))
  ]);
};
