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

  contact: {
    email: {
      type: String,
      required: true,
      unique: true
    },

    text: {
      type: String,
      required: false,
      unique: true
    },

    voice: {
      type: String,
      required: false,
      unique: true
    },

    preferredType: {
      type: String,
      enum: [
        'email',
        'text',
        'voice'
      ],
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

Schema.virtual('contact.preferred').get(function() {
  return this.contact[this.contact.preferredType];
});

export const Model = mongoose.model('User', Schema);

export default {
  Model,
  Schema
};
