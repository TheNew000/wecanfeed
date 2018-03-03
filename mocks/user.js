import faker from 'faker';
import moment from 'moment';

import User from '../src/domain-model/user';

const now = Date.now();

export const staticEmailUser = new User.Model({
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
    email: 'bob@smith.com',
    text: faker.phone.phoneNumber(),
    voice: faker.phone.phoneNumber(),
    preferredType: 'email'
  }
})

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
