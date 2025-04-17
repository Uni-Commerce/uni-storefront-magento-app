import { ApolloProvider } from '@apollo/client'
import type { FC } from 'react'

interface HttpProviderProps {
  children: React.ReactNode
}

const HttpProvider: FC<HttpProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default HttpProvider
