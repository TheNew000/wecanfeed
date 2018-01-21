import * as faker from 'faker';
import * as moment from 'moment';

import DonationReceipt from '../src/domain-model/donation-receipt';

const now = Date.now();

export default new DonationReceipt.Model({
  timestamps: {
    createdAt: moment(faker.date.past()).format('x'),
    updatedAt: moment(faker.date.recent()).format('x')
  }
});
