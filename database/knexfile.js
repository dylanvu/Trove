'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/trove_dev'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/trove_test'
  }
};
