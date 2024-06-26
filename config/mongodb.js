const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

(async () => {
  try {
    await client.connect();
    console.log("Connected successfully to server MongoDB");
  } catch (error) {
    console.error(error);
  }
})();

const db = client.db("eduwork-native");

module.exports = db;
