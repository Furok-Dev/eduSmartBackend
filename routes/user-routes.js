// rutas para las peliculas del usuario
const express = require('express');
const UserService = require('../services/user-service');

const userApi = (app) => {
  const router = express.Router();
  app.use('/api/user', router);

  const usersService = new UserService();
  router.post('/login', async (req, res) => {
    const { body: email } = req;
    try {
      const findUser = await usersService.getUser(email);
      res.status(200).json({
        data: findUser,
        message: 'user finded',
      });
    } catch (error) {
      res.status(400).json({
        message: 'user not finded',
      });
    }
  });

  router.post('/', async (req, res) => {
    const { body: user } = req;
    try {
      const createUserId = await usersService.createUser({ user });
      res.status(201).json({
        data: createUserId,
        message: 'user created',
      });
    } catch (error) {
      res.status(400).json({
        message: 'error al crear el usuario',
      });
    }
  });
};

module.exports = userApi;
