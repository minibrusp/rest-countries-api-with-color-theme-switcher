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

export const COUNTRY = gql`
  query Country($id: ID!) {
    country(id: $id) {
      _id
      name
      flag
      flags {
        png
        svg
      }
      nativeName
      population
      region
      subregion
      capital
      topLevelDomain
      currencies {
        name
      }
      languages {
        name
      }
      borders {
        _id
        name
        alpha3Code
      }
    }
  }
`

