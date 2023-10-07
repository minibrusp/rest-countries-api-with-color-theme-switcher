import { useState } from "react"
import DropdownFilter from "./DropdownFilter"
import SearchFilter from "./SearchFilter"

export type typeSelected = "All" | "Africa" | "America" | "Asia" | "Europe" | "Oceania"

const CountriesHeader = () => {
  
  const [searchFilter, setSearchFilter] = useState("")
  const [selected, setSelected] = useState<typeSelected>("All")
  

  return (
    <div className="flex flex-col items-start justify-center gap-12 mx-auto my-8 px-4 w-full text-very-dark-blue-txt dark:text-white-txt-elem">
      <SearchFilter setSearchFilter={setSearchFilter} searchFilter={searchFilter} />
      <DropdownFilter selected={selected} setSelected={setSelected} />
    </div>
  )
}

export default CountriesHeader