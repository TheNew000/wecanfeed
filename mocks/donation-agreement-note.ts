import DonationAgreementNote from '../src/domain-model/donation-agreement-note';

const now = Date.now();

export default new DonationAgreementNote.Model({
  timestamps: {
    createdAt: now,
    updatedAt: now
  },
  comments: 'They suck bad.',
  isNegativeFeedback: true
});
