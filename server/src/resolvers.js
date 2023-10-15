import db from "./db/conn.js"
import { ObjectId } from "mongodb"

const resolvers = {
  Country: {
    id: (parent) => parent.id ?? parent._id,
  },
  Query: {
    async getCountries(_, { offset, limit, selectFilter, searchFilter }, context) {
      console.log("Requested");

      let collection = await db.collection("countries")
      if(selectFilter !== "All") {
        const count = await collection.countDocuments({"region": selectFilter, "name": { $regex: searchFilter, $options: "i" } })
        const countries = await collection.find({ "region": selectFilter, "name": { $regex: searchFilter, $options: "i" } }).skip(offset).limit(limit).toArray()
        return { countries, count }
      }
      const count = await collection.countDocuments({"name": { $regex: searchFilter, $options: "i" }})
      const countries = await collection.find({"name": { $regex: searchFilter, $options: "i" }}).skip(offset).limit(limit).toArray()
      return { countries, count }
    },
    async country(_, { id }, context) {
      console.log("Requested");

      let collection = await db.collection("countries")
      let query = { _id: new ObjectId(id) }
      let country = await collection.findOne(query)


      return country
    }

  }
}


export default resolvers