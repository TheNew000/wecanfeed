import * as mongoose from 'mongoose';

import Location from './location';

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
    },

    canceledAt: {
      type: Date,
      required: false,
      unique: false
    }
  },

  name: {
    type: String,
    required: true,
    unique: false

  },

  summary: {
    type: String,
    required: false,
    unique: false
  },

  website: {
    type: String,
    required: false,
    unique: false
  },

  agreements: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DonationAgreement',
    required: false,
    unique: false
  },

  location: {
    type: Location.Schema,
    required: true,
    unique: false
  },

  team: {
    contacts: {
      primary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        unique: false
      },

      secondary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        unique: false
      }
    },

    admins: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User',
      required: false,
      unique: false

    },

    contributors: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User',
      required: false,
      unique: false
    },

    transporters: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User',
      required: false,
      unique: false
    }

  }

}, {
  toObject: {
    virtuals: true
  },

  toJSON: {
    virtuals: true
  }
});

export const Model = mongoose.model('DonationProvider', Schema);

export default {
  Model,
  Schema
};
