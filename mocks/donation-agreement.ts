import * as faker from 'faker';
import * as moment from 'moment';

import DonationAgreement from '../src/domain-model/donation-agreement';

const now = Date.now();

export default () => {
  return new DonationAgreement.Model({
    timestamps: {
      createdAt: moment(faker.date.past()).format('x'),
      updatedAt: moment(faker.date.recent()).format('x')
    }
  });
};
