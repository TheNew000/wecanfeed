import Donation from '../src/domain-model/donation';

const now = Date.now();

export default new Donation.Model({
  timestamps: {
    createdAt: now,
    updatedAt: now
  },
  estimatedValue: 100,
  relativeSize: 'car-full',
  summary: 'A good donation',
  image: 'http://www.image.com/pathtoimage'
});
