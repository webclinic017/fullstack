'use strict';

// Set default node environment to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// setCompnayName
process.env.COMPANY_NAME = "pkds";

// if (env === 'development' || env === 'test') {
//     // Register the Babel require hook
//     require('babel-core/register');
// }

// Export the application
module.exports = require('./app');