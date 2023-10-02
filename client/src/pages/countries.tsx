// import { useQuery, gql } from "@apollo/client"
import Layout from "../layout"
import QueryResult from "../components/QueryResult"
import { useQuery, gql, ApolloError } from "@apollo/client"
import { useEffect } from "react"

const COUNTRIES = gql`
  query CountriesQuery($limit: Int, $offset: Int, $filter: String) {
    countries(limit: $limit, offset: $offset, filter: $filter) {
      _id
      name
      region
      capital
      timezones
    }
}
`

export type Country = {
  capital: string,
  name: string,
  region: string,
  _id: string,
  timezones: string[]
}

export type Query = {
  countries?: Country[]
}

function Countries() {
  const { loading, error, data } = useQuery<Query>(COUNTRIES, {
    variables: {
      offset: 0,
      limit: 10
    }
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <main>
      <Layout>
        <QueryResult error={error} loading={loading} data={data}>
          <span>{data?.countries?.map((country: Country) => (
            <div key={country.name}>{country.name}</div>
          ))}</span>
        </QueryResult>
      </Layout>
    </main>
  )
}


export default Countries