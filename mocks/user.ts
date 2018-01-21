import * as faker from 'faker';
import * as moment from 'moment';

import User from '../src/domain-model/user';

const now = Date.now();

export default () => {
  return new User.Model({
    timestamps: {
      createdAt: moment(faker.date.past()).format('x'),
      updatedAt: moment(faker.date.recent()).format('x')
    },
    username: faker.internet.userName(),
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName()
    },
    contact: {
      email: faker.internet.email(),
      text: faker.phone.phoneNumber(),
      voice: faker.phone.phoneNumber(),
      preferredType: faker.random.arrayElement(['email', 'text', 'voice'])
    }
  });
};
