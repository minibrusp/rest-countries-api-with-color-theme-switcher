import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Pages } from './pages'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_GRAPHQL_HOST,
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Pages />
    </ApolloProvider>
  </React.StrictMode>,
)
