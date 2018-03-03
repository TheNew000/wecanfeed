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

  _id: false,
  id: false,

  toObject: {
    virtuals: true
  },

  toJSON: {
    virtuals: true
  }
});

var Model = exports.Model = _mongoose2.default.model('Location', Schema);

exports.default = {
  Model: Model,
  Schema: Schema
};