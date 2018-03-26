import mongoose from 'mongoose';

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

  comments: {
    type: String,
    required: true,
    unique: false
  },

  isNegativeFeedback: {
    type: Boolean,
    required: true,
    unique: false
  }
}, {
  _id: false,
  id: false,

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
