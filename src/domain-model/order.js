import mongoose from 'mongoose';

import Product from './product';

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

  consumer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Consumer',
    required: false,
    unique: false
  },

  consumerGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ConsumerGroup',
    required: false,
    unique: false
  },

  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provider',
    required: false,
    unique: false
  },

  products: {
    type: [Product.Schema],
    ref: 'User',
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

export const Model = mongoose.model('Order', Schema);

export default {
  Model,
  Schema
};
