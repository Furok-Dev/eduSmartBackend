/**
 * Este sera el archivo donde realizaremos la conexion a mongoAtlas
 *
 */
const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const DB_HOST = config.dbHost;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
// Ahora construimos la libreria de mongo

class MongoDB {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      maxPoolSize: 50,
      wtimeoutMS: 2500,
      useNewUrlParser: true,
    });
    this.dbName = DB_NAME;
  }

  connectToDB() {
    if (!MongoDB.connection) {
      MongoDB.connection = new Promise((resolve, reject) => {
        this.client.connect((err) => {
          if (err) {
            reject(err);
          }
          console.log('Connection successfully');
          resolve(this.client.db(this.dbName));
        });
      });
    }
    return MongoDB.connection;
  }
}

// miramos si vale
const testDB = new MongoDB();
testDB.connectToDB();

module.exports = MongoDB;
