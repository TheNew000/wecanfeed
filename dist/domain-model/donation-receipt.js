'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = exports.Schema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _donation = require('./donation');

var _donation2 = _interopRequireDefault(_donation);

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
    },

    claimedAt: {
      type: Date,
      required: false,
      unique: false
    },

    transferredAt: {
      type: Date,
      required: false,
      unique: false
    }
  },

  donation: {
    type: _donation2.default.Schema,
    required: true,
    unique: false
  },

  authorizations: {
    createdBy: {
      type: _mongoose2.default.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: false
    },

    claimedBy: {
      type: _mongoose2.default.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
      unique: false
    },

    transferredBy: {
      type: _mongoose2.default.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
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

var Model = exports.Model = _mongoose2.default.model('DonationReceipt', Schema);

exports.default = {
  Model: Model,
  Schema: Schema
};