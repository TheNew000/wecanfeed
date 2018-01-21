import * as faker from 'faker';
import * as moment from 'moment';

import DonationAgreementNote from '../src/domain-model/donation-agreement-note';

const now = Date.now();

export default new DonationAgreementNote.Model({
  timestamps: {
    createdAt: moment(faker.date.past()).format('x'),
    updatedAt: moment(faker.date.recent()).format('x')
  },
  comments: 'They suck bad.',
  isNegativeFeedback: true
});
