import DonationProvider from '../../src/domain-model/donation-provider';

const now = Date.now();

export default new DonationProvider.Model({
  timestamps: {
    createdAt: now,
    updatedAt: now
  },
  name: 'Big Shelter',
  summary: 'A good place',
  website: 'http://www.website.com'
});
