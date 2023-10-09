// import { useQuery, gql } from "@apollo/client"
import Layout from "../layout"
import QueryResult from "../components/QueryResult"
import { useQuery } from "@apollo/client"
import { useDeferredValue, useEffect } from "react"
import CountriesHeader from "../components/CountriesHeader"
import CountryCard from "../components/CountryCard"
import Pagination from "../components/Pagination"
import { COUNTRIES } from "../graphql/query"
import { Country, QueryListOfCountry } from "../types/types"
import { useCountriesStore } from "../stores/useCountriesStore"


const PAGE_SIZE = 10

function Countries() {
  const page = useCountriesStore((state) => state.page)
  const updatePage = useCountriesStore((state) => state.updatePage)
  const selectFilter = useCountriesStore((state) => state.selectFilter)
  const searchFilter = useCountriesStore((state) => state.searchFilter)
  const deferedSearchFilter = useDeferredValue(searchFilter)

  const { loading, error, data } = useQuery<QueryListOfCountry>(COUNTRIES, {
    variables: {
      offset: page * PAGE_SIZE,
      limit: PAGE_SIZE,
      selectFilter: selectFilter,
      searchFilter: deferedSearchFilter
    }
  })
  
  useEffect(() => {
    console.log('data:', data?.getCountries)
  }, [data])

  return (
    <main>
      <Layout>
        <section>
          <h2 className="hidden invisible">Countries</h2>
          <CountriesHeader />
          <QueryResult error={error} loading={loading} data={data}>
            <div className="flex flex-col justify-center items-center gap-[50px]">
              { data?.getCountries.countries?.map((country: Country) => (
                <CountryCard key={country.name} country={country} />
              ))}
            </div>
          </QueryResult>
          <Pagination
            setPage={updatePage}
            currentPage={page}
            Offset={page * PAGE_SIZE}  
            data={data} 
            isLoading={loading}
          />
        </section>
      </Layout>
    </main>
  )
}


export default Countries