'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = exports.Schema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _donationAgreementNote = require('./donation-agreement-note');

var _donationAgreementNote2 = _interopRequireDefault(_donationAgreementNote);

var _donationReceipt = require('./donation-receipt');

var _donationReceipt2 = _interopRequireDefault(_donationReceipt);

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

    revokedAt: {
      type: Date,
      required: false,
      unique: false
    }
  },

  notes: {
    type: [_donationAgreementNote2.default.Schema],
    required: false,
    unique: false
  },

  receipts: {
    type: [_donationReceipt2.default.Schema],
    required: false,
    unique: false
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

var Model = exports.Model = _mongoose2.default.model('DonationAgreement', Schema);

exports.default = {
  Model: Model,
  Schema: Schema
};