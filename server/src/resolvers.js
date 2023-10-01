import db from "./db/conn.js"
import { ObjectId } from "mongodb"

const resolvers = {
  Country: {
    id: (parent) => parent.id ?? parent._id,
  },
  Query: {
    async countries(_, { offset, limit, filter }, context) {
      let collection = await db.collection("countries")
      if(filter) {
        const countries = await collection.find({ "region": filter }).skip(offset).limit(limit).toArray()
        return countries
      }
      const countries = await collection.find().skip(offset).limit(limit).toArray()
      return countries
    },
    async country(_, { id }, context) {
      let collection = await db.collection("countries")
      let query = { _id: new ObjectId(id) }
      let country = await collection.findOne(query)

      return country
    }

  }
}


export default resolvers