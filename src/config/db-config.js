const { MongoClient } = require("mongodb");

async function setupDb(app) {
  const url = process.env.DB_URI;
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("Database successfully connected");

    const database = client.db("auth");
    const dbCollection = database.collection("users");
    const userData = {
      name: "sample name",
      password: "sample password",
      createdAt: new Date(),
    };

    const result = await dbCollection.insertOne(userData);
    console.log(`User inserted with _id: ${result.insertedId}`);

    dbCollection
      .findOne({ _id: result.insertedId })
      .then((res) => console.log(res));

    return dbCollection
  } catch (err) {
    console.error(err);
  }
}

module.exports = setupDb;
