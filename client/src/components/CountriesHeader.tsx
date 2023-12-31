import DropdownFilter from "./DropdownFilter"
import SearchFilter from "./SearchFilter"



const CountriesHeader = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-12 mx-auto my-8 px-4 w-full text-very-dark-blue-txt dark:text-white-txt-elem sm:flex-row sm:justify-between sm:items-center min-[1440px]:px-24 xl:px-24">
      <SearchFilter />
      <DropdownFilter />
    </div>
  )
}

export default CountriesHeader