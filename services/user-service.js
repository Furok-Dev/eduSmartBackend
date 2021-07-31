const bcrypt = require('bcrypt');
const MongoLib = require('../lib/mongoDB');

// bcrypt para crear password en modo hash y no guardarlos tan como llegan
class UserService {
  constructor() {
    this.collection = 'users';
    this.mongoDB = new MongoLib();
  }

  // para obtener todos los usuarios con getall
  async getUser(correo) {
    const user = await this.mongoDB.getOnly(this.collection, correo);
    const { email, password } = user[0];
    const isValidPassword = await bcrypt.compare(correo.pass, password);
    const isValidEmail = email === correo.correo;
    const isValidUser = isValidEmail && isValidPassword;
    if (!isValidUser) {
      const userData = {
        status: 'error',
      };
      return userData;
    }

    const userData = {
      status: 'ok',
      username: user[0].name,
    };
    return userData;
  }

  async createUser({ user }) {
    const { name, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUserId = await this.mongoDB.create(this.collection, {
      name,
      email,
      password: hashedPassword,
    });

    return createdUserId;
  }
}
module.exports = UserService;
