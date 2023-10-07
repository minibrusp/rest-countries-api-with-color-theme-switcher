import { gql } from "@apollo/client"

export const COUNTRIES = gql`
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