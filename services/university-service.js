// Vamos a usar la base de datos
const MongoLib = require('../lib/mongoDB');

class UniversityService {
    // clase para listar las preguntas que seran consumidas en al app movil
    constructor() {
        this.collection = 'universityData';
        this.mongoDB = new MongoLib();
    }

    async getUniversityes(area) {
        const universityes = await this.mongoDB.getResultTest(this.collection, area);
        return universityes || [];
    }
}

module.exports = UniversityService;