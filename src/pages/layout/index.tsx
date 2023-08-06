import React, {Suspense} from 'react'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Foot from './footer';
import Head from './header';
import Aside from './aside';
import {Route, Routes, Navigate} from 'react-router-dom';
import routes, {RouteItem} from '@/routes';


const renderRoutes = (routes: RouteItem[]) =>
  routes.map(({ path, routes, Component }) =>
    routes ? (
      renderRoutes(routes)
    ) : (
      <Route key={path} path={path} element={
        <Suspense fallback={
          <div>路由懒加载...</div>
        }>
          < Component />
        </Suspense>
      } />
    ),
  )


export default function index() {
  return (
    <div className='h-full'>
        <Head></Head>
        <div className=' bg-white h-full flex ' >
            <Aside routes={routes}></Aside>
            <div >
              <Routes>
                { renderRoutes(routes)}
                <Route path='*' element={<Navigate to='/home'></Navigate>}></Route>
              </Routes>
            </div>
        </div>
        <Foot></Foot>
    </div>
  )
}
