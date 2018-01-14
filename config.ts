// Base config from which others inherit
const base = {};

// Development environment specific config
export const development = Object.assign({}, base, {
  database: {
    url: 'mongodb://localhost:27017/wecanfeed-dev'
  }
});

// Test environment specific config
export const test = Object.assign({}, base, {
  database: {
    url: 'mongodb://localhost:27017/wecanfeed-test'
  }
});

// Production environment specific config
export const production = Object.assign({}, base, {
  database: {
    url: 'mongodb://localhost:27017/wecanfeed-prod'
  }
});

// Create config map
const configMap = {
  development,
  test,
  production
};

// Export config per environment
export default configMap[process.env.NODE_ENV || 'development'];
