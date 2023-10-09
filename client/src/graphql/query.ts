import { gql } from "@apollo/client"

export const COUNTRIES = gql`
  query GetCountries($offset: Int, $limit: Int, $selectFilter: String, $searchFilter: String) {
    getCountries(offset: $offset, limit: $limit, selectFilter: $selectFilter, searchFilter: $searchFilter) {
      count
      countries {
        _id
        name
        region
        capital
        population
        flag
        flags {
          png
          svg
        }
      }
    }
  }
`

