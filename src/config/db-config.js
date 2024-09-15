const { MongoClient } = require("mongodb");

class DbConfig {
  #uri;
  #dbName;
  #client;
  #db;
  constructor(uri, dbName) {
    this.#uri = uri;
    this.#dbName = dbName;
    this.#client = new MongoClient(this.#uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.#db = null;
  }

  async connect() {
    try {
      await this.#client.connect();
      console.log("Connected to MongoDB");
      this.#db = this.#client.db(this.#dbName);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

  async insertDocument(collectionName, document) {
    try {
      const collection = this.#db.collection(collectionName);
      const result = await collection.insertOne(document);
      console.log("Document inserted:", result.insertedId);
      return result.insertedId;
    } catch (error) {
      console.error("Error inserting document:", error);
    }
  }

  async findDocuments(collectionName, query = {}) {
    try {
      const collection = this.#db.collection(collectionName);
      const documents = await collection.find(query).toArray();
      return documents;
    } catch (error) {
      console.error("Error retrieving documents:", error);
    }
  }

  async close() {
    try {
      await this.#client.close();
      console.log("Connection to MongoDB closed");
    } catch (error) {
      console.error("Error closing connection to MongoDB:", error);
    }
  }
}

module.exports = DbConfig;
