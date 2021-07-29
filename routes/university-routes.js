const express = require('express');

const userApi = (expressApp) => {
  const router = express.Router();
  expressApp.use('/api/movies', router);
};

module.exports = userApi;
