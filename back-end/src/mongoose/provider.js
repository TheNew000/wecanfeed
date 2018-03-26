import mongoose from 'mongoose';

import Location from './location';
import Product from './product';
import Contact from './contact';

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

  name: {
    type: String,
    required: true,
    unique: false
  },

  description: {
    type: String,
    required: false,
    unique: false
  },

  industryVerticals: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Tag',
    required: true,
    unique: false
  },

  contacts: {
    type: [Contact.Schema],
    required: false,
    unique: false
  },

  inventory: {
    type: [Product.Schema],
    required: false,
    unique: false
  },

  donationAgreements: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'DonationAgreement',
    required: false,
    unique: false
  },

  offersDonations: {
    type: Boolean,
    required: true,
    unique: false
  },

  location: {
    type: Location.Schema,
    required: true,
    unique: false
  },

  orders: {
    fulfilled: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Order',
      required: false,
      unique: false
    },

    pending: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Order',
      required: false,
      unique: false
    },
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

    members: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User',
      required: false,
      unique: false
    }
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

export const Model = mongoose.model('Provider', Schema);

export default {
  Model,
  Schema
};
