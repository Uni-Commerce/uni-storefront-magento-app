import { ApolloProvider } from '@apollo/client'
import type { FC } from 'react'

import { createClient } from './createClient'

interface HttpProviderProps {
  children: React.ReactNode
}

const HttpProvider: FC<HttpProviderProps> = ({ children }) => {
  const client = createClient()

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default HttpProvider
