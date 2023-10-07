import { Country } from "../pages/countries";


export default function CountryCard({ country } : { country: Country }) {
  return (
    <div key={country.name} className="max-w-[328px] min-w-[328px] mx-auto bg-white-txt-elem shadow-lg shadow-dark-gray-input/10 rounded-[7px] overflow-hidden cursor-pointer dark:bg-dark-blue dark:shadow-very-dark-blue-bg dark:text-white-txt-elem">
      <img src={country.flags.png} alt={country.name} className="rounded-t-[7px] min-h-[199px] max-h-[199px] w-full" />
      <div className="pt-9 pb-14 px-[30px]">
        <h3 className="font-extrabold text-xl mb-4">{country.name}</h3>
        <div className="text-lg dark:">
          <span className="font-semibold ">Population: </span>
          <span className="font-light">
            {country.population.toLocaleString()}
          </span>
        </div>
        <div className="text-lg">
          <span className="font-semibold ">Region: </span>
          <span className="font-light">
            {country.region}
          </span>
        </div>
        <div className="text-lg">
          <span className="font-semibold ">Capital: </span>
          <span className="font-light">
            {country.capital}
          </span>
        </div>
      </div>
      
    </div>
  )
}
