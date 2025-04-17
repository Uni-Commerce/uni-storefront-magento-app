import { ApolloClient, InMemoryCache } from '@apollo/client'

import { createAdobeLink } from './adobeLink'

export const createClient = () => {
  const adobeLink = createAdobeLink()

  return new ApolloClient({
    link: adobeLink,
    cache: new InMemoryCache({
      addTypename: false
    }).restore({}),
    connectToDevTools: false,
    ssrMode: false,
    defaultOptions: {
      query: {
        fetchPolicy: 'cache-first'
      }
    }
  })
}
