const dotenv = require('dotenv');

dotenv.config();

const config = {
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '') || 3000
};

module.exports = config;
