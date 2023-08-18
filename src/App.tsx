import React, {Suspense} from 'react';
import Layout from '@/pages/layout';
import {Route, Routes, Navigate} from 'react-router-dom';
import routes, {RouteItem} from '@/routes';
import Loading from './component/loading';
const renderRoutes = (routes: RouteItem[]) =>
  routes.map(({ path, routes, Component }) =>
    routes ? (
      <Route key={path} path={path} element={
        localStorage.getItem('user')?
        <Suspense fallback={
          <Loading text='路由' className='ml-[20px] mt-[10px]'></Loading>
        }>
          < Component />
        </Suspense>
        :
        <Navigate to='/login'></Navigate>
      } >
        {renderRoutes(routes)}
        </Route>
    ) : (
      <Route key={path} path={path} element={
        localStorage.getItem('user')||path=='/login'?
        <Suspense fallback={
          <Loading text='路由' className='ml-[20px] mt-[10px]'></Loading>
        }>
          < Component />
        </Suspense>:
        <Navigate to='/login'></Navigate>
      } />
    ),
  )

function App() {
  return (
    <div className='min-h-full' style={{height:"100%"}}>
      <Routes>
        { renderRoutes(routes)}
        <Route path='*' element={<Navigate to='/admin/home'></Navigate>}></Route>
      </Routes>
    </div>

  );
}

export default App;
