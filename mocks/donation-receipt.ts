import DonationReceipt from '../src/domain-model/donation-receipt';

const now = Date.now();

export default new DonationReceipt.Model({
  timestamps: {
    createdAt: now,
    updatedAt: now
  }
});
