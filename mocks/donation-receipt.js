import faker from 'faker';
import moment from 'moment';

import donation from './donation';

export default (providerUser, consumerUser) => {
  return {
    timestamps: {
      createdAt: moment(faker.date.past()).format('x'),
      updatedAt: moment(faker.date.recent()).format('x'),
      claimedAt: moment(faker.date.recent()).format('x'),
      transferredAt: moment(faker.date.recent()).format('x')
    },
    authorizations: {
      createdBy: providerUser,
      claimedBy: consumerUser,
      transferredBy: consumerUser
    },
    donation: donation()
  };
};
