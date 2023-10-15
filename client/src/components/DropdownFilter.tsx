import { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { typeSelected } from "../types/types";
import { useCountriesStore } from "../stores/useCountriesStore";


export default function DropdownFilter() {

  const selectFilter = useCountriesStore((state) => state.selectFilter)
  const updateSelectFilter = useCountriesStore((state) => state.updateSelectFilter)
  const page = useCountriesStore((state) => state.page)
  const updatePage = useCountriesStore((state) => state.updatePage)

  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (event: React.MouseEvent<HTMLLIElement>) => {
    updateSelectFilter(event.currentTarget.textContent as typeSelected)
    updatePage("RESET")
    setIsOpen(false)
  }

  useEffect(() => {
    console.log(page);
    
  }, [page])

  return (
    <div className="relative">
        <div className="dropdown text-very-dark-blue-txt bg-white-txt-elem px-[1.7rem] py-[1.25rem] cursor-pointer w-[235px] text-sm block relative shadow-md shadow-dark-gray-input/10 rounded-md dark:text-white-txt-elem dark:bg-dark-blue dark:shadow-very-dark-blue-bg sm:max-h-[56px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>
            {selectFilter !== "All" ? selectFilter : "Filter by Region"}
          </span>
          <span className="absolute top-1/2 -translate-y-1/2 right-[1.7rem] rotate-90 scale-y-100 scale-x-[0.7]">
            <FaGreaterThan className="h-3 w-3" />
          </span>
        </div>

        {
          isOpen && 
          (
            <ul className="list-none py-4 mt-1 leading-[1.85rem] text-very-dark-blue-txt bg-white-txt-elem w-[235px] text-sm shadow-md shadow-dark-gray-input/10 rounded-md absolute dark:bg-dark-blue dark:text-white-txt-elem dark:shadow-very-dark-blue-bg"
            >
              <li 
                onClick={handleSelect} 
                className="px-[1.7rem] hover:bg-dark-gray-input cursor-pointer hidden"
              >Filter by Region</li>
              <li 
                onClick={handleSelect} 
                className="px-[1.7rem] hover:bg-dark-gray-input cursor-pointer"
              >All</li>
              <li 
                onClick={handleSelect} 
                className="px-[1.7rem] hover:bg-dark-gray-input cursor-pointer"
              >Africa</li>
              <li 
                onClick={handleSelect} 
                className="px-[1.7rem] hover:bg-dark-gray-input cursor-pointer"
              >America</li>
              <li 
                onClick={handleSelect} 
                className="px-[1.7rem] hover:bg-dark-gray-input cursor-pointer"
              >Asia</li>
              <li 
                onClick={handleSelect} 
                className="px-[1.7rem] hover:bg-dark-gray-input cursor-pointer"
              >Europe</li>
              <li 
                onClick={handleSelect} 
                className="px-[1.7rem] hover:bg-dark-gray-input cursor-pointer"
              >Oceania</li>
            </ul>
          )
        }

        

      </div>
  )
}
