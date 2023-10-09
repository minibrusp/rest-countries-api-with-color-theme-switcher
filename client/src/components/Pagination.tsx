import { useEffect, useMemo } from "react";
import { PaginationProps } from "../types/types";


export default function Pagination({ currentPage, setPage, Offset, data, isLoading } : PaginationProps) {

  useEffect(() => {
    console.log(`data countries length: `, data?.getCountries.countries?.length);
    console.log(`currentPage: `, currentPage + 1);
    console.log(`Offset: `, Offset);
    
  }, [data?.getCountries.countries])

  const MAX_PAGE = useMemo(() => {
    let result = data?.getCountries.count! / 10
    
    return Math.ceil(result)
  }, [data?.getCountries.count])

  return (
    <div className="py-8 flex flex-row justify-center items-center gap-2 w-full">
      <button 
        className={` p-2 rounded-lg text-xs cursor-pointer ${currentPage == 0 ? "bg-red-400" : "bg-sky-500" } ${currentPage == 0 ? "cursor-auto" : "cursor-pointer" }`} 
        disabled={currentPage < 1 || isLoading}
        onClick={() => setPage("PREV")}
      >
        Prev
      </button>
      {
        isLoading ? (
          <span className="bg-sky-500 p-2 rounded-lg text-xs">
            loading...
          </span>
        ) : (
          <span 
          className="bg-sky-500 p-2 rounded-lg text-xs"
          >
            {`${currentPage + 1} of ${ MAX_PAGE}`}
          </span>
        )
      }
      <button 
      className={` p-2 rounded-lg text-xs ${((currentPage + 1) >= MAX_PAGE) ? "bg-red-400" : "bg-sky-500" } ${((currentPage + 1) >= 25) ? "cursor-auto" : "cursor-pointer" }`}
      disabled={((currentPage + 1) >= MAX_PAGE) || isLoading}
      onClick={() => setPage("NEXT")}
      >
        Next
      </button>
    </div>
  )
}
