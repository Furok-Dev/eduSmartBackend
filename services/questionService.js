// Vamos a usar la base de datos
const MongoLib = require('../lib/mongoDB');

class UniversityService {
  // clase para listar las preguntas que seran consumidas en al app movil
  constructor() {
    this.collection = 'questionBank';
    this.mongoDB = new MongoLib();
  }

  async getAllQuestions() {
    const questions = await this.mongoDB.getAll(this.collection);
    return questions || [];
  }
}

module.exports = UniversityService;
