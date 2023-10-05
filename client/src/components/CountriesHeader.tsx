import DropdownFilter from "./DropdownFilter"
import SearchFilter from "./SearchFilter"

const CountriesHeader = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-10 mx-auto my-6 px-4 w-full text-very-dark-blue-txt dark:text-white-txt-elem">
      <SearchFilter />
      <DropdownFilter />
    </div>
  )
}

export default CountriesHeader