import * as faker from 'faker';
import * as moment from 'moment';

import Donation from '../src/domain-model/donation';

const now = Date.now();

export default new Donation.Model({
  timestamps: {
    createdAt: moment(faker.date.past()).format('x'),
    updatedAt: moment(faker.date.recent()).format('x')
  },
  estimatedValue: 100,
  relativeSize: 'car-full',
  summary: 'A good donation',
  image: 'http://www.image.com/pathtoimage'
});
