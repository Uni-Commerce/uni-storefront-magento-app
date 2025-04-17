import { ApolloLink, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { REACT_NATIVE_API_URL } from '@env'

export const createAdobeLink = () => {
  const uri: string = `${REACT_NATIVE_API_URL}graphql`
  const httpLink = new HttpLink({
    uri,
    credentials: 'same-origin',
    useGETForQueries: true
  })

  const middlewareLink = new ApolloLink((operation, forward) => {
    // const storeCode = !isEmpty(config.reduxState) ? config.reduxState.app.storeConfig.code : ''
    // const currencyCode = !isEmpty(config.reduxState) ? config.reduxState.app.currency.code : ''

    const context = operation.getContext()
    operation.setContext({
      headers: {
        'User-Agent': 'Uni Commerce 1.0',
        //   Store: exsistCookies?.store_code ?? storeCode,
        //   'Content-Currency': exsistCookies?.currency_code ?? currencyCode,
        //   Authorization: exsistCookies.access_token ? `Bearer ${exsistCookies.access_token}` : null
        ...context?.headers
      }
    })

    return forward(operation)
  })

  const errorLink = onError(({ graphQLErrors, networkError }: any) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message }: any, index: number) => {
        const msg: string = message.replace('GraphQL error: ', '')
        graphQLErrors[index].message = msg
        console.error(graphQLErrors[index].message)
      })
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`)
    }
  })

  const apolloLink = middlewareLink.concat(httpLink)
  const finalLink = errorLink.concat(apolloLink)
  return finalLink
}
