import mongoose from 'mongoose';

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
    updatedWith: {
      type: String,
      required: false,
      unique: false
    }
  },

  username: {
    type: String,
    required: true,
    unique: true
  },

  name: {
    first: {
      type: String,
      required: true,
      unique: false
    },

    last: {
      type: String,
      required: true,
      unique: false
    }
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  contacts: {
    type: [Contact.Schema],
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

export const Model = mongoose.model('User', Schema);

export default {
  Model,
  Schema
};
