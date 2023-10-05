import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";

type typeSelected = null | "Africa" | "America" | "Asia" | "Europe" | "Oceania"


export default function DropdownFilter() {

  const [selected, setSelected] = useState<typeSelected>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (event: React.MouseEvent<HTMLLIElement>) => {
    setSelected(event.currentTarget.textContent as React.SetStateAction<typeSelected>)
    setIsOpen(false)
  }

  return (
    <div className="relative">
        <div className="dropdown text-very-dark-blue-txt bg-white-txt-elem p-4 cursor-pointer w-[200px] text-sm block relative shadow-md shadow-dark-gray-input/10 rounded-md dark:text-white-txt-elem dark:bg-dark-blue dark:shadow-very-dark-blue-bg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>
            {selected ? selected : "Filter by Region"}
          </span>
          <span className="absolute top-1/2 -translate-y-1/2 right-4 rotate-90 scale-y-110 scale-x-90">
            <FaGreaterThan className="h-3 w-3" />
          </span>
        </div>

        {
          isOpen && 
          (
            <ul className="list-none py-4 mt-1 leading-7 text-very-dark-blue-txt bg-white-txt-elem w-[200px] text-sm shadow-md shadow-dark-gray-input/10 rounded-md absolute dark:bg-dark-blue dark:text-white-txt-elem dark:shadow-very-dark-blue-bg"
            >
              <li 
                onClick={handleSelect} 
                className="px-4 hover:bg-dark-gray-input cursor-pointer hidden"
              >Filter by Region</li>
              <li 
                onClick={handleSelect} 
                className="px-4 hover:bg-dark-gray-input cursor-pointer"
              >Africa</li>
              <li 
                onClick={handleSelect} 
                className="px-4 hover:bg-dark-gray-input cursor-pointer"
              >America</li>
              <li 
                onClick={handleSelect} 
                className="px-4 hover:bg-dark-gray-input cursor-pointer"
              >Asia</li>
              <li 
                onClick={handleSelect} 
                className="px-4 hover:bg-dark-gray-input cursor-pointer"
              >Europe</li>
              <li 
                onClick={handleSelect} 
                className="px-4 hover:bg-dark-gray-input cursor-pointer"
              >Oceania</li>
            </ul>
          )
        }

        

      </div>
  )
}
