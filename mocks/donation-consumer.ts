import * as faker from 'faker';
import * as moment from 'moment';

import DonationConsumer from '../src/domain-model/donation-consumer';
import location from '../mocks/location';

export default () => {
  return new DonationConsumer.Model({
    timestamps: {
      createdAt: moment(faker.date.past()).format('x'),
      updatedAt: moment(faker.date.recent()).format('x')
    },
    name: faker.company.companyName(),
    summary: faker.company.catchPhrase(),
    website: faker.internet.url(),
    averageOccupancy: faker.random.number(),
    isAccepting: faker.random.boolean(),
    location: location()
  });
};
