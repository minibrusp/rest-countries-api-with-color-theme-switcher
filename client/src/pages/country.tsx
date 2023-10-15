import Layout from "../layout";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { QuerySingleCountry } from "../types/types";
import { useQuery } from "@apollo/client";
import { COUNTRY } from "../graphql/query";
import { useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";



export default function Country() {
  const { id } = useParams()

  const { loading, error, data } = useQuery<QuerySingleCountry>(COUNTRY, {
    variables: { id }
  })

  useEffect(() => {
    console.log(data)

    
  }, [data])

  // if(error) return "Could not connect to db."
  if(error) return (
    <main>
      <Layout>
      <section className="py-10 mx-5 text-very-dark-blue-txt dark:text-white-txt-elem lg:max-w-[1024px] lg:mx-auto xl:p-20 xl:max-w-[1440px] xl:mx-auto">
        <div className='flex justify-center items-center w-full h-screen'>
          <span>"Could not connect to db."</span>
        </div>
      </section>
      </Layout>
    </main>
  )

  if(loading) return (
    <main>
      <Layout>
      <section className="py-10 mx-5 text-very-dark-blue-txt dark:text-white-txt-elem lg:max-w-[1024px] lg:mx-auto xl:p-20 xl:max-w-[1440px] xl:mx-auto">
        <div className='flex justify-center items-center w-full h-screen'>
          <LoadingSpinner />
        </div>
      </section>
      </Layout>
    </main>
  )

  return (
    <main>
      <Layout>
        <section className="py-10 mx-5 text-very-dark-blue-txt dark:text-white-txt-elem lg:max-w-[1024px] lg:mx-auto xl:p-20 xl:max-w-[1440px] xl:mx-auto">
          <div className="mb-6 xl:mx-24 xl:mb-20">
            <Link to={"/"}>
              <button className="inline-flex items-center justify-center gap-2 py-[0.4rem] px-6 rounded-[5px] shadow-back-box shadow-dark-gray-input/60 dark:bg-dark-blue dark:shadow-back-box-dark dark:shadow-very-dark-blue-txt/40 xl:py-[9px] xl:px-[38px]">
                <span className="text-lg xl:text-xl">
                  <BsArrowLeft className="stroke-dark-gray-input/80 dark:stroke-white-txt-elem" />
                </span>
                <span className="font-light text-sm dark:text-white-txt-elem xl:text-base">
                  Back
                </span>
              </button>
            </Link>
          </div>
          <div className="md:flex md:flex-row md:justify-start md:items-center md:gap-8 xl:mx-24 xl:gap-16">
            <img 
              src={`${data?.country.flag}`} 
              alt={`National Flag of ${id}`}
              className="py-10 min-h-[229px] max-h-[402px] md:max-w-[400px] lg:p-0 lg:max-w-[560px] lg:min-w-[560px] lg:min-h-[402px]" 
            />
            <div className="xl:w-full">
              <div>
                <div className="mb-10">
                  <h1 className="font-bold text-2xl mb-6 xl:text-[32px]">{data?.country.name}</h1>
                  <dl className="md:flex md:flex-wrap md:items-start md:justify-between">
                    <div className="mb-10">
                      <div className="flex justify-start items-center gap-1 font-light text-[14.5px] mb-[7px] xl:text-base">
                        <dt className="font-semibold">Native Name: </dt>
                        <dd>{data?.country.nativeName}</dd>
                      </div>
                      <div className="flex justify-start items-center gap-1 font-light text-[14.5px] mb-[7px] xl:text-base">
                        <dt className="font-semibold">Population: </dt>
                        <dd>{data?.country.population.toLocaleString()}</dd>
                      </div>
                      <div className="flex justify-start items-center gap-1 font-light text-[14.5px] mb-[7px] xl:text-base">
                        <dt className="font-semibold">Region: </dt>
                        <dd>{data?.country.region}</dd>
                      </div>
                      <div className="flex justify-start items-center gap-1 font-light text-[14.5px] mb-[7px] xl:text-base">
                        <dt className="font-semibold">Sub Region: </dt>
                        <dd>{data?.country.subregion}</dd>
                      </div>
                      <div className="flex justify-start items-center gap-1 font-light text-[14.5px] mb-[7px] xl:text-base">
                        <dt className="font-semibold">Capital: </dt>
                        <dd>{data?.country.capital ? data.country.capital : 'None'}</dd>
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
                  <div className="flex justify-start items-start flex-row flex-wrap gap-3">
                    {data?.country.borders?.map((border) => {
                      if(border != null) return (
                        <span key={border} className="text-xs py-[0.4rem] px-6 rounded-[5px] shadow-back-box shadow-dark-gray-input/60 dark:bg-dark-blue dark:shadow-back-box-dark dark:shadow-very-dark-blue-txt/40 xl:text-sm">{border}</span>
                      )
                    })}
                  </div>

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
