const { MongoClient } = require("mongodb");

async function setupDb() {
  const url = process.env.DB_URL || "mongodb://localhost:27017";
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("Database successfully connected");

    // const database = client.db("auth");
    // const collection = database.collection("users");
    // const userData = {
    //   name: "sample name",
    //   password: "sample password",
    //   createdAt: new Date(),
    // };

    // const result = await collection.insertOne(userData);
    // console.log(`User inserted with _id: ${result.insertedId}`);

    // collection
    //   .findOne({ _id: result.insertedId })
    //   .then((res) => console.log(res));

    return client;
  } catch (err) {
    console.error(err);
  }
}

module.exports = setupDb;
