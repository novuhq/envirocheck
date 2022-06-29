const { MongoClient } = require("mongodb");

export async function checkIfMongoDBIsOnline() {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017');
    await client.close();

    return true;
  } catch (e) {
    return false;
  }
};
