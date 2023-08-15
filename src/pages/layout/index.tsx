import React, {Suspense} from 'react'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Foot from './footer';
import Head from './header';
import Aside from './aside';
import {Route, Routes, Navigate} from 'react-router-dom';
import routes, {RouteItem} from '@/routes';
import Loading from '../../component/loading';

const renderRoutes = (routes: RouteItem[]) =>
  routes.map(({ path, routes, Component }) =>
    routes ? (
      renderRoutes(routes)
    ) : (
      <Route key={path} path={path} element={
        localStorage.getItem('user')?
        <Suspense fallback={
          <Loading text='路由' className='ml-[20px] mt-[10px]'></Loading>
        }>
          < Component />
        </Suspense>:
        <div>请先登录</div>
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
