/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY.
 */
/* eslint-disable */

import * as Types from '../../../apollo/types'

import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'
import * as VueCompositionApi from 'vue'
export type ReactiveFunction<TParam> = () => TParam
export type GetLatestPricesQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetLatestPricesQuery = {
    __typename?: 'Query'
    getLatestPrices: Array<{
        __typename?: 'TokenMarketInfo'
        id: string
        symbol: string
        name: string
        image: string
        contract?: string | null
        current_price?: number | null
        market_cap?: number | null
        total_volume?: number | null
        total_supply?: string | null
        price_change_percentage_24h?: number | null
    } | null>
}

export const GetLatestPricesDocument = gql`
    query getLatestPrices {
        getLatestPrices {
            id
            symbol
            name
            image
            contract
            current_price
            market_cap
            total_volume
            total_supply
            price_change_percentage_24h
        }
    }
`

/**
 * __useGetLatestPricesQuery__
 *
 * To run a query within a Vue component, call `useGetLatestPricesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestPricesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetLatestPricesQuery();
 */
export function useGetLatestPricesQuery(
    options:
        | VueApolloComposable.UseQueryOptions<GetLatestPricesQuery, GetLatestPricesQueryVariables>
        | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetLatestPricesQuery, GetLatestPricesQueryVariables>>
        | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetLatestPricesQuery, GetLatestPricesQueryVariables>> = {}
) {
    return VueApolloComposable.useQuery<GetLatestPricesQuery, GetLatestPricesQueryVariables>(GetLatestPricesDocument, {}, options)
}
export function useGetLatestPricesLazyQuery(
    options:
        | VueApolloComposable.UseQueryOptions<GetLatestPricesQuery, GetLatestPricesQueryVariables>
        | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetLatestPricesQuery, GetLatestPricesQueryVariables>>
        | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetLatestPricesQuery, GetLatestPricesQueryVariables>> = {}
) {
    return VueApolloComposable.useLazyQuery<GetLatestPricesQuery, GetLatestPricesQueryVariables>(GetLatestPricesDocument, {}, options)
}
export type GetLatestPricesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetLatestPricesQuery, GetLatestPricesQueryVariables>
