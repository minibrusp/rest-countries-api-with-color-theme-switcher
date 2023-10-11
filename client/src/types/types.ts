export type currency = {
  name: string
}

export type language = {
  name: string
}

export type borders = string

export type CountryType = {
  _id: string,
  name: string,
  nativeName?: string,
  population: number,
  region: string,
  subregion?: string,
  capital: string,
  topLevelDomain?: string,
  currencies?: currency[] | undefined,
  flag: string,
  flags: {
    png: string
  },
  languages?: language[] | undefined
  borders?: borders[]
}

export type CountriesAndCount = {
  count: number,
  countries?: CountryType[]
}

export type QuerySingleCountry = {
  country: CountryType
}


export type QueryListOfCountry = {
  getCountries: CountriesAndCount
}

export type PaginationProps = {
  currentPage: number,
  setPage: (type: "PREV" | "NEXT") => void,
  Offset: number,
  data: QueryListOfCountry | undefined,
  isLoading: boolean
}

export type CountriesStore = {
  page: number,
  searchFilter: string,
  selectFilter: typeSelected,
  updatePage: (type: "PREV" | "NEXT" | "RESET") => void,
  updateSearchFilter: (searchFilter: string) => void,
  updateSelectFilter: (selectFilter: typeSelected) => void,
}

export type typeSelected = "All" | "Africa" | "America" | "Americas" | "Asia" | "Europe" | "Oceania"
