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

  estimatedValue: {
    type: Number,
    required: true,
    unique: false
  },

  relativeSize: {
    type: String,
    enum: ['few-bags', 'many-bags', 'car-full', 'van-full', 'box-truck'],
    required: true,
    unique: false

  },

  summary: {
    type: String,
    required: false,
    unique: false
  },

  image: {
    type: String,
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

export const Model = mongoose.model('Donation', Schema);

export default {
  Model,
  Schema
};
