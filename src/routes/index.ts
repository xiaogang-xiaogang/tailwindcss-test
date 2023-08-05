import { lazy, FC, LazyExoticComponent} from 'react'

export interface RouteItem {
    name:string,
    path:string,
    Component: LazyExoticComponent<FC>,
    routes:Array<RouteItem>
}

const routes:Array<RouteItem> = [
    {
        name:'首页',
        path:'/home',
        Component:lazy(()=>import('@/pages/first'))
    },
    {
        name:'柱状图',
        path:'/bar',
        Component:lazy(()=>import('@/pages/bar'))
    },
    {
        name:'折线图',
        path:'/line',
        Component:lazy(()=>import('@/pages/line'))
    },
    {
        name:'饼图',
        path:'/pie',
        Component:lazy(()=>import('@/pages/pie'))
    },
    {
        name:'散点图',
        path:'/scatter',
        Component:lazy(()=>import('@/pages/scatter'))
    },
]

export default routes