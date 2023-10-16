import * as dotenv from 'dotenv'
dotenv.config()

import { MongoClient, ServerApiVersion  } from 'mongodb'

const ATLAS_URL = `mongodb+srv://${process.env.ATLAST_DB_USER}:${process.env.ATLAST_DB_PASS}@restcountriesapi.lwsrakx.mongodb.net/?retryWrites=true&w=majority`

// const connectionString = process.env.ATLAS_URI || "";
const connectionString = ATLAS_URL || "";

const client = new MongoClient(connectionString, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

let conn

try {
  conn = await client.connect();
  console.log("Database Connection Established \n")
} catch (error) {
  console.error(error);

  console.log(`\n\nYou must set the ATLAS_URI environment variable in the .env file`);

}

let db = conn.db(`${process.env.DB_LOCAL_NAME}`);

export default db;