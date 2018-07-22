// Configuration

// environments
const environments = {
  staging: {   // staging
      'httpPort' : 3000,
      'httpsPort' : 3001,
      'envName' : 'staging'
  },
  production: {   // production
    'httpPort' : 5000,
    'httpsPort' : 5001,
    'envName' : 'production'
  }
}

// Determine which environment
const env = typeof(process.env.NODE_ENV) === 'string' ?
  process.env.NODE_ENV.toLowerCase() : 
 '';

// Check that the current environment
const environmentToExport = typeof(environments[env]) === 'object' ? environments[env] : environments.staging;

module.exports = environmentToExport;