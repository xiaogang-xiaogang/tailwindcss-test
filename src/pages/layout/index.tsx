import React, {Suspense} from 'react'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Foot from './footer';
import Head from './header';
import Aside from './aside';
import {Route, Routes, Navigate, Outlet} from 'react-router-dom';
import routes, {RouteItem} from '@/routes';


export default function index() {
  return (
    <div className='h-full'>
        <Head></Head>
        <div className=' bg-white h-full flex ' >
            <Aside routes={routes}></Aside>
            <div >
              <Outlet/>
            </div>
        </div>
        <Foot></Foot>
    </div>
  )
}
