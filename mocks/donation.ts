import * as faker from 'faker';
import * as moment from 'moment';

export default () => {
  return {
    timestamps: {
      createdAt: moment(faker.date.past()).format('x'),
      updatedAt: moment(faker.date.recent()).format('x')
    },
    estimatedValue: faker.random.number(),
    relativeSize: faker.random.arrayElement([
      'few-bags',
      'many-bags',
      'car-full',
      'van-full',
      'box-truck'
    ]),
    summary: faker.lorem.paragraph(),
    image: faker.image.imageUrl()
  };
};
