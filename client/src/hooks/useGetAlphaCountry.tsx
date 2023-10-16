import { useLazyQuery } from "@apollo/client"
import { LazyQuery } from "../types/types"
import { COUNTRYBYALPHA3 } from "../graphql/query"
import { useMemo } from "react"

export default function useGetAlphaCountry() {
  const [getCountry, { loading, error, data }] = useLazyQuery<LazyQuery>(COUNTRYBYALPHA3)
  const AlphaId = data?.getCountryByAlpha3._id

  
  
  return { getCountry, AlphaId, loading, data }
}
