import { createBrowserRouter } from 'react-router-dom';

import Context from './context/context';
import { mainPageData } from './context/mainPageData';
import RouterLayout from './layouts/RouterLayout';
import About from './pages/About';
import BigCredit from './pages/BigCredit';
import Contacts from './pages/Contacts';
import CreditItem from './pages/CreditItem';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import ScrollToTop from './utils/ScrollToTop';

// Для того, чтобы внутри приложения работали компоненты из react-router-dom, нужно обернуть приложение
// в контекст роутера (<BrowserRouter>). Однако этот компонент изначально возвращает только те компоненты, которые он
// рендерит по заданному урлу => не понятно, как отрисовывать общие компоненты по типу header и footer. Для решения
// этой проблемы нужно создать родительский роут, который будет отрисовывать общие компоненты (<RouterLayout>) + все
// то, что будут отрисовывать дочерние роуты (все роутеры приложения) для каждого урла (<Outlet>).

export const router = createBrowserRouter([
   {
      path: '/',
      element: (
         <RouterLayout>
            <ScrollToTop />
         </RouterLayout>
      ),
      children: [
         {
            path: '/',
            element: (
               <Context.Provider value={mainPageData}>
                  <MainPage />
               </Context.Provider>
            ),
         },
         {
            path: '/BigCredit',
            element: (
               <Context.Provider value={''}>
                  <BigCredit />
               </Context.Provider>
            ),
         },
         {
            path: '/about',
            element: (
               <Context.Provider value={''}>
                  <About />
               </Context.Provider>
            ),
         },
         {
            path: '/contacts',
            element: (
               <Context.Provider value={''}>
                  <Contacts />
               </Context.Provider>
            ),
         },
         {
            path: '/CreditItem',
            element: (
               <Context.Provider value={''}>
                  <CreditItem />
               </Context.Provider>
            ),
         },
         {
            path: '/error',
            element: <RouterLayout />,
            errorElement: (
               <RouterLayout>
                  <ErrorPage />
               </RouterLayout>
            ),
         },
      ],
   },
]);
