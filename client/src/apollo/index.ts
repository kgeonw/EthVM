import { isAPIExceptionProduction, isAPIExceptionDev } from './errorExceptions'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { RetryLink } from '@apollo/client/link/retry'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { onError } from '@apollo/client/link/error'
import { getMainDefinition } from '@apollo/client/utilities'
// import { OpenSeaClient } from './opensea/osClient'
// import { FavAddrClient } from './favorite-addresses/favAddrClient'
// import { FavTokClient } from './favorite-tokens/favTokenClient'
// import { LocalStoreClient } from './local-store-global/localStoreClient'
// import { EthBlocksClient } from './eth-blocks/ethBlocksClient'
// import { ContractsClient } from './contract-verify/contractsClient'
import configs from '../configs'

/*
  ===================================================================================
    APIs: Apollo (GraphQL)
  ===================================================================================
*/

const httpLink = createHttpLink({
    uri: configs.APOLLO_HTTP
})

const wsLink = new GraphQLWsLink(
    createClient({
        url: configs.APOLLO_WS,
        lazy: true
    })
)

const onErrorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
            const loc = JSON.stringify(locations, null, 2)
            const op = JSON.stringify(operation, null, 2)
            const newError = `[GraphQL error]: Message: ${message}, \nLocation: ${loc}, \nPath: ${path}, \nOperation: ${op}`
            //For production and staging emit to Sentry:
            if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
                if (!isAPIExceptionProduction(message)) {
                    // Sentry.captureException(newError)
                }
            } else {
                //For Development use only console errors:
                if (!isAPIExceptionDev(message)) {
                    console.log(newError)
                }
            }
        })
    }
})
const retry = new RetryLink({
    delay: {
        initial: 500,
        max: 5000,
        jitter: true
    },
    attempts: {
        max: 10,
        retryIf: (error, _operation) => (error && error.message ? error.message.includes('Failed to fetch') : false)
    }
})
const link = retry.split(
    // split based on operation type
    ({ query }) => {
        const definition = getMainDefinition(query)
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    wsLink,
    onErrorLink.concat(httpLink)
)

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link,
    cache,
    connectToDevTools: configs.NODE_ENV === 'development'
})

export default {
    default: apolloClient
    // OpenSeaClient,
    // FavAddrClient,
    // FavTokClient,
    // LocalStoreClient,
    // EthBlocksClient,
    // ContractsClient
}
