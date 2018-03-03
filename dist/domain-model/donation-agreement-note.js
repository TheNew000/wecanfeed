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

  comments: {
    type: String,
    required: true,
    unique: false
  },

  isNegativeFeedback: {
    type: Boolean,
    required: true,
    unique: false
  },

  createdBy: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
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

var Model = exports.Model = _mongoose2.default.model('DonationAgreementNote', Schema);

exports.default = {
  Model: Model,
  Schema: Schema
};