import mongoose from 'mongoose';

import DonationAgreementNote from './donation-agreement-note';
import DonationReceipt from './donation-receipt';

export const Schema = new mongoose.Schema({
  timestamps: {
    createdAt: {
      type: Date,
      required: true,
      unique: false
    },

    updatedAt: {
      type: Date,
      required: false,
      unique: false
    },

    removedAt: {
      type: Date,
      required: false,
      unique: false
    }
  },

  audit: {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: false
    },

    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
      unique: false
    },

    updatedWith: {
      type: String,
      required: false,
      unique: false
    },

    removedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
      unique: false
    }
  },

  notes: {
    type: [DonationAgreementNote.Schema],
    required: false,
    unique: false
  },

  receipts: {
    type: [DonationReceipt.Schema],
    required: false,
    unique: false
  }
}, {
  id: false,

  toObject: {
    virtuals: true
  },

  toJSON: {
    virtuals: true
  }
});

export const Model = mongoose.model('DonationAgreement', Schema);

export default {
  Model,
  Schema
};
