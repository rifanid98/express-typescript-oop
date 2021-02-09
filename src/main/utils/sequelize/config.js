require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.DB_USER_DEV,
    "password": process.env.DB_PASS_DEV,
    "database": process.env.DB_NAME_DEV,
    "host": process.env.DB_HOST_DEV,
    "dialect": "postgres",
    "logging": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "logging": false
  }
};