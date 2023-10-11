import Layout from "../layout";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { QuerySingleCountry } from "../types/types";
import { useQuery } from "@apollo/client";
import { COUNTRY } from "../graphql/query";
import { useEffect } from "react";



export default function Country() {
  const { id } = useParams()

  const { loading, error, data } = useQuery<QuerySingleCountry>(COUNTRY, {
    variables: { id }
  })

  useEffect(() => {
    console.log(data)

    
  }, [data])

  if(error) return "Could not connect to db."

  if(loading) return "Loading Loading Loading..."

  return (
    <main>
      <Layout>
        <section className="py-10 mx-5 text-very-dark-blue-txt dark:text-white-txt-elem">
          <div className="mb-6">
            <Link to={"/"}>
              <button className="flex items-center justify-center gap-2 py-[0.4rem] px-6 rounded-[2px] shadow-back-box shadow-dark-gray-input/60 dark:bg-dark-blue dark:shadow-back-box-dark dark:shadow-very-dark-blue-bg">
                <span className="text-lg">
                  <BsArrowLeft className="stroke-dark-gray-input/80 dark:stroke-white-txt-elem" />
                </span>
                <span className="font-light text-sm dark:text-white-txt-elem">
                  Back
                </span>
              </button>
            </Link>
          </div>
          <div className="">
            <img 
              src={`${data?.country.flag}`} 
              alt={`National Flag of ${id}`}
              className="py-10 min-h-[229px]" 
            />
            <div>
              <div>
                <div className="mb-10">
                  <dl>
                    <div className="mb-10">
                      <h1 className="font-bold text-2xl mb-6">{data?.country.name}</h1>
                      <div className="flex justify-start items-center gap-1 font-light text-[14.5px] mb-[7px]">
                        <dt className="font-semibold">Native Name: </dt>
                        <dd>{data?.country.nativeName}</dd>
                      </div>
                      <div className="flex justify-start items-center gap-1 font-light text-[14.5px] mb-[7px]">
                        <dt className="font-semibold">Population: </dt>
                        <dd>{data?.country.population}</dd>
                      </div>
                      <div className="flex justify-start items-center gap-1 font-light text-[14.5px] mb-[7px]">
                        <dt className="font-semibold">Region: </dt>
                        <dd>{data?.country.region}</dd>
                      </div>
                      <div className="flex justify-start items-center gap-1 font-light text-[14.5px] mb-[7px]">
                        <dt className="font-semibold">Sub Region: </dt>
                        <dd>{data?.country.subregion}</dd>
                      </div>
                      <div className="flex justify-start items-center gap-1 font-light text-[14.5px] mb-[7px]">
                        <dt className="font-semibold">Capital: </dt>
                        <dd>{data?.country.capital}</dd>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-start items-center gap-1 font-light text-[15px] mb-[7px]">
                        <dt className="font-semibold">Top Level Domain: </dt>
                        <dd>{data?.country.topLevelDomain}</dd>
                      </div>
                      <div className="flex justify-start items-center gap-1 font-light text-[15px] mb-[7px]">
                        <dt className="font-semibold">Currencies: </dt>
                        {data?.country.currencies?.map((country) => (
                          <dd key={country.name}>{country.name}</dd>
                        ))}
                      </div>
                      <div className="flex justify-start items-center gap-1 font-light text-[15px] mb-[7px]">
                        <dt className="font-semibold">Languages: </dt>
                        {data?.country.languages?.map((language, index, arr) => {
                          if(index == (arr.length - 1)) {
                            return (
                              <dd key={language.name}>{language.name}</dd>
                            )} else return ( <dd key={language.name}>{`${language.name}, `}</dd> )
                        })}
                      </div>
                    </div>
                  </dl>
                </div>
                <div>
                  {data?.country.borders && <h2 className="font-semibold mb-3">Border Countries:</h2> }
                  {data?.country.borders?.map((border) => {
                    if(border != null) return (
                        <div key={border} className="inline-flex justify-start items-start flex-row flex-wrap gap-2">
                        <span className="text-xs py-[0.4rem] px-6 rounded-[2px] shadow-back-box shadow-dark-gray-input/60 dark:bg-dark-blue dark:shadow-back-box-dark dark:shadow-very-dark-blue-bg">{border}</span>
                      </div>
                    )

                  }
                  
                  )}
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>
        </section>
      </Layout>
    </main>
  )
}
