import React from 'react'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Foot from './footer';
import Head from './header';
import Aside from './aside';
export default function index() {
  return (
    <div className='h-full'>
        <Head></Head>
        <div className=' bg-white h-4/5 flex ' >
            <Aside ></Aside>
            <div className='w-4/5 '>content</div>
        </div>
        <Foot></Foot>
    </div>
  )
}
