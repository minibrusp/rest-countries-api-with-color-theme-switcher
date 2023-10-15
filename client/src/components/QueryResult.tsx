import { ApolloError } from '@apollo/client';
import { QueryListOfCountry } from '../types/types';
import LoadingSpinner from './LoadingSpinner';

type props = {
  loading: boolean,
  error: ApolloError | undefined,
  data: QueryListOfCountry | undefined
  children?: JSX.Element
}


const QueryResult = ({ loading, error, data, children }: props ) => {

  if(error) return (
    <div className='flex justify-center items-center w-full h-full p-8'>
      <p>Error: {error.message}</p>
    </div>
  )

  if(loading) {
    return (
      <div className='flex justify-center items-center w-full h-full'>
        <LoadingSpinner />
      </div>
    )
  }

  if(data) return (
    <>
      { children }
    </>
  )
}

export default QueryResult