import faker from 'faker';
import moment from 'moment';

import DonationConsumer from '../src/domain-model/donation-consumer';
import location from '../mocks/location';
import user from '../mocks/location';

export default () => {
  return new DonationConsumer.Model({
    timestamps: {
      createdAt: moment(faker.date.past()).format('x'),
      updatedAt: moment(faker.date.recent()).format('x'),
      canceledAt: faker.random.arrayElement([null, moment(faker.date.recent()).format('x')])
    },
    name: faker.company.companyName(),
    summary: faker.company.catchPhrase(),
    website: faker.internet.url(),
    averageOccupancy: faker.random.number(),
    isAccepting: faker.random.boolean(),
    location: location(),
    agreements: []
  });
};
