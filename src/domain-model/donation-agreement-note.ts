import * as mongoose from 'mongoose';

export const Schema = new mongoose.Schema({

  timestamps: {
    createdAt: {
      type: Date,
      required: true,
      unique: false
    },

    updatedAt: {
      type: Date,
      required: true,
      unique: false
    }
  },

  comments: {
    type: String,
    required: true,
    unique: false
  },

  isNegativeFeedback: {
    type: Boolean,
    required: true,
    unique: false
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: false
  }

}, {
  toObject: {
    virtuals: true
  },

  toJSON: {
    virtuals: true
  }
});

export const Model = mongoose.model('DonationAgreementNote', Schema);

export default {
  Model,
  Schema
};
