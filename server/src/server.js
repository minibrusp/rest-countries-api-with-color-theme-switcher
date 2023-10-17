import express, { json } from "express"
import cors from "cors"
import gql from "graphql-tag"
import { ApolloServer } from "@apollo/server"
import { buildSubgraphSchema } from "@apollo/subgraph"
import { expressMiddleware } from "@apollo/server/express4"
import { readFileSync } from "fs"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"
import resolvers from "./resolvers.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PORT = process.env.PORT || 5050
const app = express()

app.use(cors())
app.use(express.json())

const typeDefs = gql(
  readFileSync(resolve(__dirname, "schema.graphql"), {
    encoding: "utf-8"
  })
)

const schema = buildSubgraphSchema({ typeDefs, resolvers })
const server = new ApolloServer({
  schema,
})

await server.start()

app.use(
  "/graphql", 
  cors({ origin: ['https://rest-countries-api-with-color-theme-switcher-frontend.vercel.app', 'https://studio.apollographql.com'] }), 
  json(), 
  expressMiddleware(server)
)

app.listen(PORT, () => {
  if(process.env.PORT) return console.log(`Server is running on port: ${PORT}`);
  if(!process.env.PORT) {
    console.log(`\n Server is running on http://localhost:${PORT} \n`)
    console.log(`Apollo Sandbox running on http://localhost:${PORT}/graphql \n`)
  }
})

export default server