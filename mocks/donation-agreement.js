import faker from 'faker';
import moment from 'moment';

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
