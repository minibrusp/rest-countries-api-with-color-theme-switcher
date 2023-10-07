import { useEffect } from "react";
import { Query } from "../pages/countries";

type PaginationProps = {
  currentPage: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  Offset: number,
  data: Query | undefined
}


export default function Pagination({ currentPage, setPage, Offset, data } : PaginationProps) {

  useEffect(() => {
    console.log(`data countries length: `, data?.countries?.length);
    console.log(`currentPage: `, currentPage);
    console.log(`Offset: `, Offset);
    
  }, [data?.countries])

  return (
    <div className="py-8 flex flex-row justify-center items-center gap-2 w-full">
      <button 
        className={` p-2 rounded-lg text-xs cursor-pointer ${currentPage == 0 ? "bg-red-400" : "bg-sky-500" } ${currentPage == 0 ? "cursor-auto" : "cursor-pointer" }`} disabled={currentPage < 1}
        onClick={() => setPage((prev) => prev - 1)}
      >
        Prev
      </button>
      <span 
      className="bg-sky-500 p-2 rounded-lg text-xs"
      >
        {currentPage + 1}
      </span>
      <button 
      className={`bg-sky-500 p-2 rounded-lg text-xs cursor-pointer ${currentPage == 0 ? "bg-red-400" : "bg-sky-500" } ${currentPage == 0 ? "cursor-auto" : "cursor-pointer" }`}
      onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  )
}
