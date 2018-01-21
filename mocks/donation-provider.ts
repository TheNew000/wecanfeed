import * as faker from 'faker';
import * as moment from 'moment';

import DonationProvider from '../src/domain-model/donation-provider';
import location from '../mocks/location';

export default () => {
  return new DonationProvider.Model({
    timestamps: {
      createdAt: moment(faker.date.past()).format('x'),
      updatedAt: moment(faker.date.recent()).format('x'),
      canceledAt: faker.random.arrayElement([null, moment(faker.date.recent()).format('x')])
    },
    name: faker.company.companyName(),
    summary: faker.company.catchPhrase(),
    website: faker.internet.url(),
    location: location()
  });
};
