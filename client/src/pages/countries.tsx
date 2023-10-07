// import { useQuery, gql } from "@apollo/client"
import Layout from "../layout"
import QueryResult from "../components/QueryResult"
import { useQuery, gql, ApolloError } from "@apollo/client"
import { useEffect, useState } from "react"
import CountriesHeader from "../components/CountriesHeader"
import CountryCard from "../components/CountryCard"
import Pagination from "../components/Pagination"

const COUNTRIES = gql`
  query CountriesQuery($limit: Int, $offset: Int, $filter: String) {
    countries(limit: $limit, offset: $offset, filter: $filter) {
      _id
      name
      region
      capital
      population
      flags {
        png
      }
    }
}
`

export type Country = {
  capital: string,
  name: string,
  region: string,
  _id: string,
  flags: {
    png: string
  },
  population: number
}

export type Query = {
  countries?: Country[]
}

const PAGE_SIZE = 10

function Countries() {
  const [page, setPage] = useState(0)
  const { loading, error, data } = useQuery<Query>(COUNTRIES, {
    variables: {
      offset: page * PAGE_SIZE,
      limit: PAGE_SIZE
    }
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <main>
      <Layout>
        <section>
          <h2 className="hidden invisible">Countries</h2>
          <CountriesHeader />
          <QueryResult error={error} loading={loading} data={data}>
            <div className="flex flex-col justify-center items-center gap-[50px]">
              { data?.countries?.map((country: Country) => (
                <CountryCard key={country.name} country={country} />
              ))}
            </div>
          </QueryResult>
          <Pagination
            setPage={setPage}
            currentPage={page}
            Offset={page * PAGE_SIZE}  
            data={data} 
          />
        </section>
      </Layout>
    </main>
  )
}


export default Countries