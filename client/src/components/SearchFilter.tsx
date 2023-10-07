import { useDeferredValue } from "react"
import { HiOutlineSearch } from "react-icons/hi"

type SearchFilterProps = {
  setSearchFilter:  React.Dispatch<React.SetStateAction<string>>,
  searchFilter: string
}

export default function SearchFilter({ setSearchFilter, searchFilter } : SearchFilterProps ) {

  const deferedSearchValue = useDeferredValue(searchFilter)
  

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value)
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
        value={deferedSearchValue}
      />
    </div>
  )
}
