import mongoose from 'mongoose';

import ValueDefinition from './value-definition';

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
    required: true,
    unique: false
  },

  category: {
    type: String,
    required: true,
    unique: false
  },

  tags: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Tag',
    required: true,
    unique: false
  },

  prices: {
    type: [ValueDefinition.Schema],
    required: true,
    unique: false
  },

  totalQuantityAvailable: {
    type: Number,
    required: true,
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

export const Model = mongoose.model('Product', Schema);

export default {
  Model,
  Schema
};
