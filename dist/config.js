'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Base config from which others inherit
var base = {};

// Development environment specific config
var development = exports.development = Object.assign({}, base, {
  database: {
    url: 'mongodb://localhost:27017/wecanfeed-dev'
  }
});

// Test environment specific config
var test = exports.test = Object.assign({}, base, {
  database: {
    url: 'mongodb://localhost:27017/wecanfeed-test'
  }
});

// Production environment specific config
var production = exports.production = Object.assign({}, base, {
  database: {
    url: 'mongodb://localhost:27017/wecanfeed-prod'
  }
});

// Create config map
var configMap = {
  development: development,
  test: test,
  production: production
};

// Export config per environment
exports.default = configMap[process.env.NODE_ENV || 'development'];