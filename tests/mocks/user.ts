import User from '../../src/domain-model/user';

const now = Date.now();

export default new User.Model({
  timestamps: {
    createdAt: now,
    updatedAt: now
  },
  username: 'foobob',
  name: {
    first: 'Bob',
    last: 'Smith'
  },
  contact: {
    email: 'bob@smith.com',
    text: '(555) 555-5555',
    voice: '(555) 555-5555',
    preferredType: 'email'
  },
  roles: {
    active: ['DonationProviderAdmin']
  }
});
