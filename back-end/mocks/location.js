import faker from 'faker';
import moment from 'moment';

export default () => {
  return {
    timestamps: {
      createdAt: moment(faker.date.past()).format('x'),
      updatedAt: moment(faker.date.recent()).format('x')
    },
    streetAddress: {
      primary: faker.address.streetAddress(),
      secondary: faker.address.secondaryAddress()
    },
    city: faker.address.city(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    coordinates: {
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude()
    }
  }
};
