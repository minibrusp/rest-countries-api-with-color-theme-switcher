import { useMemo } from "react";
import { PaginationProps } from "../types/types";


export default function Pagination({ currentPage, setPage, data, isLoading } : PaginationProps) {

  const MAX_PAGE = useMemo(() => {
    let result = data?.getCountries.count! / 10
    
    return Math.ceil(result)
  }, [data?.getCountries.count])

  return (
    <div className="py-8 flex flex-row justify-center items-center gap-2 w-full">
      <button 
        className={` p-2 rounded-lg text-xs shadow-back-box shadow-dark-gray-input/60 dark:shadow-very-dark-blue-txt/40 dark:bg-dark-blue ${currentPage == 0 ? " text-dark-gray-input dark:text-dark-gray-input/40 cursor-default" : "dark:text-white-txt-elem shadow-dark-gray-input/60 dark:bg-dark-blue dark:shadow-back-box-dark" } ${currentPage == 0 ? "cursor-default" : "cursor-pointer" }`} 
        disabled={currentPage < 1 || isLoading}
        onClick={() => setPage("PREV")}
      >
        Prev
      </button>
      {
        isLoading ? (
          <span className="dark:bg-dark-blue shadow-back-box shadow-dark-gray-input/60 dark:shadow-very-dark-blue-txt/40 dark:text-white-txt-elem p-2 rounded-lg text-xs">
            loading...
          </span>
        ) : (
          <span 
          className="dark:bg-dark-blue shadow-back-box shadow-dark-gray-input/60 dark:shadow-very-dark-blue-txt/40 dark:text-white-txt-elem p-2 rounded-lg text-xs"
          >
            {`${currentPage + 1} of ${ MAX_PAGE}`}
          </span>
        )
      }
      <button 
      className={` p-2 rounded-lg text-xs shadow-back-box shadow-dark-gray-input/60 dark:shadow-very-dark-blue-txt/40 ${((currentPage + 1) >= MAX_PAGE) ? "dark:bg-dark-blue text-dark-gray-input dark:text-dark-gray-input/40 cursor-default" : "dark:text-white-txt-elem shadow-dark-gray-input/60 dark:bg-dark-blue dark:shadow-back-box-dark" } ${((currentPage + 1) >= MAX_PAGE) ? "cursor-default" : "cursor-pointer" }`}
      disabled={((currentPage + 1) >= MAX_PAGE) || isLoading}
      onClick={() => setPage("NEXT")}
      >
        Next
      </button>
    </div>
  )
}
