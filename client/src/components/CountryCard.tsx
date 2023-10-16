import { CountryType } from "../types/types";
import { Link } from "react-router-dom"

export default function CountryCard({ country } : { country: CountryType }) {
  return (
    <Link to={`countries/${country._id}`}>
      <div key={country.name} className="max-w-[328px] min-w-[328px] mx-auto bg-white-txt-elem shadow-lg shadow-dark-gray-input/10 rounded-[7px] overflow-hidden cursor-pointer dark:bg-dark-blue dark:shadow-very-dark-blue-bg dark:text-white-txt-elem sm:min-w-[264px] sm:max-w-[264px] sm:min-h-[336px]">
        <img src={country.flags.png} alt={country.name} className="rounded-t-[7px] min-h-[199px] max-h-[199px] w-full sm:max-h-[160px] sm:min-h-[160px]" />
        <div className="pt-9 pb-14 px-[30px] sm:px-6 sm:pt-5 sm:pb-8">
          <h3 className="font-extrabold text-xl mb-4 sm:text-lg">{country.name}</h3>
          <div className="text-lg sm:text-sm sm:mb-1">
            <span className="font-semibold ">Population: </span>
            <span className="font-light">
              {country.population.toLocaleString()}
            </span>
          </div>
          <div className="text-lg sm:text-sm sm:mb-1">
            <span className="font-semibold ">Region: </span>
            <span className="font-light">
              {country.region}
            </span>
          </div>
          <div className="text-lg sm:text-sm sm:mb-1">
            <span className="font-semibold ">Capital: </span>
            <span className="font-light">
              {country.capital ? country.capital : 'None'}
            </span>
          </div>
        </div>
        
      </div>
    </Link>
  )
}
