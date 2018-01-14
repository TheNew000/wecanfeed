import * as mongoose from 'mongoose';
import { expect } from 'chai';
import 'mocha';

import DonationAgreementNote from '../../src/domain-model/donation-agreement-note';
import donationAgreementNote from '../../mocks/donation-agreement-note';

const {
  timestamps,
  comments,
  isNegativeFeedback,
  createdBy
} = DonationAgreementNote.Schema.obj;

describe('DonationAgreementNote Model and Schema', () => {

  it('should define the createdAt property model', () => {
    expect(timestamps.createdAt.type).to.equal(Date, 'Expected type to equal Date');
    expect(timestamps.createdAt.required).to.equal(true, 'Expected required to equal true');
    expect(timestamps.createdAt.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the updatedAt property model', () => {
    expect(timestamps.updatedAt.type).to.equal(Date, 'Expected type to equal Date');
    expect(timestamps.updatedAt.required).to.equal(true, 'Expected required to equal true');
    expect(timestamps.updatedAt.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the comments property model', () => {
    expect(comments.type).to.equal(String, 'Expected type to equal String');
    expect(comments.required).to.equal(true, 'Expected required to equal true');
    expect(comments.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the isNegativeFeedback property model', () => {
    expect(isNegativeFeedback.type).to.equal(Boolean, 'Expected type to equal Boolean');
    expect(isNegativeFeedback.required).to.equal(true, 'Expected required to equal true');
    expect(isNegativeFeedback.unique).to.equal(false, 'Expected unique to equal false');
  });

  it('should define the createdBy property model', () => {
    expect(createdBy.type).to.equal(mongoose.Schema.Types.ObjectId, 'Expected type to equal ObjectId');
    expect(createdBy.ref).to.equal('User', 'Expected ref to equal User');
    expect(createdBy.required).to.equal(true, 'Expected required to equal false');
    expect(createdBy.unique).to.equal(false, 'Expected unique to equal false');
  });


});
