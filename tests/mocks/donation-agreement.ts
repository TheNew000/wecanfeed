import DonationAgreement from '../../src/domain-model/donation-agreement';

const now = Date.now();

export default new DonationAgreement.Model({
  timestamps: {
    createdAt: now,
    updatedAt: now
  }
});
