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
        path:'/admin',
        Component:lazy(()=>import('@/pages/layout')),
        routes:[
            {
                name:'首页',
                path:'/admin/home',
                Component:lazy(()=>import('@/pages/first'))
            },
            {
                name:'柱状图',
                path:'/admin/bar',
                Component:lazy(()=>import('@/pages/bar'))
            },
            {
                name:'折线图',
                path:'/admin/line',
                Component:lazy(()=>import('@/pages/line'))
            },
            {
                name:'饼图',
                path:'/admin/pie',
                Component:lazy(()=>import('@/pages/pie'))
            },
            {
                name:'散点图',
                path:'/admin/scatter',
                Component:lazy(()=>import('@/pages/scatter'))
            },
            {
                name:'自定义hooks推拽',
                path:'/admin/drag',
                Component:lazy(()=>import('@/pages/drag'))
            },
            {
                name:'大文件上传',
                path:'/admin/upload',
                Component:lazy(()=>import('@/pages/bigUpload'))
            }
        ]
    },
    {
        name:'login',
        path:'/login',
        Component:lazy(()=>import('@/pages/login'))
    }
]

export default routes