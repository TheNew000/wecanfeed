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
  _id: false,
  id: false,

  toObject: {
    virtuals: true
  },

  toJSON: {
    virtuals: true
  }
});

var Model = exports.Model = _mongoose2.default.model('Donation', Schema);

exports.default = {
  Model: Model,
  Schema: Schema
};