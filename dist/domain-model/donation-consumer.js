'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = exports.Schema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _location = require('./location');

var _location2 = _interopRequireDefault(_location);

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

    canceledAt: {
      type: Date,
      required: false,
      unique: false
    }
  },

  name: {
    type: String,
    required: true,
    unique: false

  },

  summary: {
    type: String,
    required: false,
    unique: false
  },

  website: {
    type: String,
    required: false,
    unique: false
  },

  averageOccupancy: {
    type: Number,
    required: false,
    unique: false
  },

  isAccepting: {
    type: Boolean,
    required: true,
    unique: false
  },

  agreements: {
    type: [_mongoose2.default.Schema.Types.ObjectId],
    ref: 'DonationAgreement',
    required: false,
    unique: false
  },

  location: {
    type: _location2.default.Schema,
    required: true,
    unique: false
  },

  team: {
    contacts: {
      primary: {
        type: _mongoose2.default.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        unique: false
      },

      secondary: {
        type: _mongoose2.default.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        unique: false
      }
    },

    admins: {
      type: [_mongoose2.default.Schema.Types.ObjectId],
      ref: 'User',
      required: false,
      unique: false

    },

    contributors: {
      type: [_mongoose2.default.Schema.Types.ObjectId],
      ref: 'User',
      required: false,
      unique: false
    },

    transporters: {
      type: [_mongoose2.default.Schema.Types.ObjectId],
      ref: 'User',
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

var Model = exports.Model = _mongoose2.default.model('DonationConsumer', Schema);

exports.default = {
  Model: Model,
  Schema: Schema
};