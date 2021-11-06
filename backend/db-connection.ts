const MongoClient = require('mongodb').MongoClient;

const uri = process.env.DB
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    await client.db("demoDB").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    await client.close();
  }
}

module.exports = { run };