'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = exports.Schema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = exports.Schema = new _mongoose2.default.Schema({

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
      enum: ['email', 'text', 'voice'],
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

Schema.virtual('contact.preferred').get(function () {
  return this.contact[this.contact.preferredType];
});

var Model = exports.Model = _mongoose2.default.model('User', Schema);

exports.default = {
  Model: Model,
  Schema: Schema
};