import DonationConsumer from '../src/domain-model/donation-consumer';

const now = Date.now();

export default new DonationConsumer.Model({
  timestamps: {
    createdAt: now,
    updatedAt: now
  },
  name: 'Big Shelter',
  summary: 'A good place',
  website: 'http://www.website.com',
  averageOccupancy: 100,
  isAccepting: true
});
