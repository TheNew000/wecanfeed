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

  streetAddress: {
    primary: {
      type: String,
      required: true,
      unique: false
    },

    secondary: {
      type: String,
      required: false,
      unique: false
    }
  },

  city: {
    type: String,
    required: true,
    unique: false
  },

  state: {
    type: String,
    required: true,
    unique: false
  },

  zipcode: {
    type: String,
    required: true,
    unique: false
  },

  coordinates: {
    latitude: {
      type: Number,
      required: true,
      unique: false
    },

    longitude: {
      type: Number,
      required: true,
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

export const Model = mongoose.model('Location', Schema);

export default {
  Model,
  Schema
};
