import { HiOutlineSearch } from "react-icons/hi"
import { useCountriesStore } from "../stores/useCountriesStore"



export default function SearchFilter() {

  const searchFilter = useCountriesStore((state) => state.searchFilter)
  const updateSearchFilter = useCountriesStore((state) => state.updateSearchFilter)
  const updatePage = useCountriesStore((state) => state.updatePage)
  

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    updatePage("RESET")
    updateSearchFilter(e.target.value)
  }

  return (
    <div className="flex justify-start items-center bg-white-txt-elem w-full max-w-[343px] outline-none relative shadow-md shadow-dark-gray-input/10 rounded-[7px] dark:bg-dark-blue dark:shadow-very-dark-blue-bg">
      <span className="absolute top-1/2 -translate-y-1/2 left-8">
        <HiOutlineSearch className="stroke-dark-gray-input/80 h-5 w-5 dark:stroke-white-txt-elem" />
      </span>
      <input 
        type="search"
        placeholder="Search for a country..."
        className="h-14 w-full pl-20 pr-8 font-Nunito-Sans text-sm rounded-[7px] text-very-dark-blue-txt bg-white-txt-elem dark:text-white-txt-elem dark:bg-dark-blue dark:placeholder-white-txt-elem"
        onChange={handleSearchChange}
        value={searchFilter}
      />
    </div>
  )
}
