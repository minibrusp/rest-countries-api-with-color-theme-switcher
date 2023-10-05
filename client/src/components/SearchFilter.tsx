import { useDeferredValue, useState } from "react"
import { HiOutlineSearch } from "react-icons/hi"

export default function SearchFilter() {

  const [searchValue, setSearchValue] = useState("")
  const deferedSearchValue = useDeferredValue(searchValue)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="flex justify-start items-center bg-white-txt-elem max-w-[343px] relative shadow-md shadow-dark-gray-input/10 rounded-xl dark:bg-dark-blue dark:shadow-very-dark-blue-bg">
      <span className="absolute top-1/2 -translate-y-1/2 left-8">
        <HiOutlineSearch className="stroke-dark-gray-input/80 h-5 w-5 dark:stroke-white-txt-elem" />
      </span>
      <input 
        type="search"
        placeholder="Search for a country..."
        className="h-12 w-full pl-20 pr-8 font-Nunito-Sans text-sm  text-very-dark-blue-txt bg-white-txt-elem dark:text-white-txt-elem dark:bg-dark-blue dark:placeholder-white-txt-elem"
        onChange={handleSearchChange}
        value={deferedSearchValue}
      />
    </div>
  )
}
