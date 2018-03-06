import faker from 'faker';
import moment from 'moment';

import Provider from '../src/domain-model/provider';
import location from '../mocks/location';

export default () => {
  return new Provider.Model({
    timestamps: {
      createdAt: moment(faker.date.past()).format('x'),
      updatedAt: moment(faker.date.recent()).format('x'),
      canceledAt: faker.random.arrayElement([null, moment(faker.date.recent()).format('x')])
    },
    name: faker.company.companyName(),
    summary: faker.company.catchPhrase(),
    website: faker.internet.url(),
    location: location(),
    agreements: []
  });
};
