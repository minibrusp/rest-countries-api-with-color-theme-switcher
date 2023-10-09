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

export type CountriesAndCount = {
  count: number,
  countries?: Country[]
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
