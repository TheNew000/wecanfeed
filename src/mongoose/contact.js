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

  name: {
    type: String,
    required: true,
    unique: false
  },

  value: {
    type: String,
    required: true,
    unique: true
  },

  type: {
    type: String,
    enum: ['email', 'href', 'voice', 'text'],
    required: true,
    unique: false
  },

  isPreferred: {
    type: Boolean,
    required: true,
    unique: false
  }

}, {
  id: false,
  _id: false,
  
  toObject: {
    virtuals: true
  },

  toJSON: {
    virtuals: true
  }
});

export const Model = mongoose.model('Contact', Schema);

export default {
  Model,
  Schema
};
