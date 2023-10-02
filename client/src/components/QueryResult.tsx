import { ApolloError } from '@apollo/client';
import { Query } from '../pages/countries';
// import { LoadingSpinner } from '@apollo/space-kit/Loaders/LoadingSpinner';

type props = {
  loading: boolean,
  error: ApolloError | undefined,
  data: Query | undefined
  children?: JSX.Element
}

// type Countries = {
//   capital: string,
//   name: string,
//   region: string,
//   _id: string
// }

const QueryResult = ({ loading, error, data, children }: props ) => {

  if(error) return <p>Error: {error.message}</p>

  if(loading) {
    return (
      <div className='flex justify-center items-center w-full h-screen'>
        {/* <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" /> */}
        LOADING LOADING LOADING
      </div>
    )
  }

  return (
    <>
      { children }
    </>
  )
}

export default QueryResult