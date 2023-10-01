import * as dotenv from 'dotenv'
dotenv.config()

import { MongoClient } from 'mongodb'

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString)

let conn

try {
  conn = await client.connect();
  console.log("Database Connection Established \n")
} catch (error) {
  console.error(e);

  console.log(`\n\nYou must set the ATLAS_URI environment variable in the .env file`);

}

let db = conn.db(`${process.env.DB_NAME}`);

export default db;