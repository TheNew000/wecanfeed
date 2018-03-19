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

  key: {
    type: String,
    required: true,
    unique: true
  },

  name: {
    type: String,
    required: true,
    unique: true
  },

  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag',
    required: false,
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

export const Model = mongoose.model('Tag', Schema);

export default {
  Model,
  Schema
};
