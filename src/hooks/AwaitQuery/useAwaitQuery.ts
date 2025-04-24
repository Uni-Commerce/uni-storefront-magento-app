import { useCallback } from 'react'
import { useApolloClient } from '@apollo/client'
import type { ApolloQueryResult, DocumentNode, QueryOptions } from '@apollo/client'

export const useAwaitQuery = <T = any>(query: DocumentNode) => {
  const apolloClient = useApolloClient()

  return useCallback(
    async (options?: Omit<QueryOptions, 'query'>): Promise<ApolloQueryResult<T>> => {
      const res = await apolloClient.query<T>({
        ...options,
        query
      })

      return res
    },
    [apolloClient, query]
  )
}
