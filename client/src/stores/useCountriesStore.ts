import { create } from "zustand"
import { CountriesStore } from "../types/types"

export const useCountriesStore = create<CountriesStore>() ((set, get) => ({
  page: 0,
  searchFilter: "",
  selectFilter: "All",
  updatePage: (type) => {
    const page = get().page
    let updated: number = page

    if(type === "NEXT") updated = page + 1
    if(type === "PREV") updated = page - 1
    if(type === "RESET") updated = 0

    set({ page: updated })
  },
  updateSearchFilter: (searchFilter) => {
    set({ searchFilter: searchFilter })
  },
  updateSelectFilter: (selectFilter) => {
    if(selectFilter === "America") selectFilter = "Americas"
    set({ selectFilter: selectFilter })
  }
})) 