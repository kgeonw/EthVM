import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { ROUTE_NAME } from './routesNames'
import HomeView from '@view/HomeView.vue'
import BlocksView from '@view/BlocksView.vue'
import TxDetailsView from '@/views/TxDetailsView.vue'
import BlockDetailsView from '@view/BlockDetailsView.vue'
import TxsView from '@view/TxsView.vue'
import ViewTemp from '@view/ViewTemp.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: ROUTE_NAME.HOME.PATH,
        name: ROUTE_NAME.HOME.NAME,
        component: HomeView
    },
    {
        path: ROUTE_NAME.BLOCKS.PATH,
        name: ROUTE_NAME.BLOCKS.NAME,
        component: BlocksView
    },
    {
        path: ROUTE_NAME.BLOCK_NUMBER.PATH,
        name: ROUTE_NAME.BLOCK_NUMBER.NAME,
        component: BlockDetailsView,
        props: true
    },
    {
        path: ROUTE_NAME.BLOCK_HASH.PATH,
        name: ROUTE_NAME.BLOCK_HASH.NAME,
        component: BlockDetailsView,
        props: true
    },
    {
        path: ROUTE_NAME.TXS.PATH,
        name: ROUTE_NAME.TXS.NAME,
        component: TxsView
    },
    {
        path: ROUTE_NAME.TX_HASH.PATH,
        name: ROUTE_NAME.TX_HASH.NAME,
        component: TxDetailsView,
        props: true
    },
    {
        path: ROUTE_NAME.TXS_PENDING.PATH,
        name: ROUTE_NAME.TXS_PENDING.NAME,
        component: ViewTemp
    },
    {
        path: ROUTE_NAME.TOKENS.PATH,
        name: ROUTE_NAME.TOKENS.NAME,
        component: ViewTemp
    },
    {
        path: ROUTE_NAME.CHARTS.PATH,
        name: ROUTE_NAME.CHARTS.NAME,
        component: ViewTemp
    },
    {
        path: ROUTE_NAME.ADDRESS.PATH,
        name: ROUTE_NAME.ADDRESS.NAME,
        component: ViewTemp
    },
    {
        path: ROUTE_NAME.FAV_ADDRESS.PATH,
        name: ROUTE_NAME.FAV_ADDRESS.NAME,
        component: ViewTemp
    },
    {
        path: ROUTE_NAME.FAV_TOKENS.PATH,
        name: ROUTE_NAME.FAV_TOKENS.NAME,
        component: ViewTemp
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
