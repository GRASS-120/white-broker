import { createBrowserRouter, redirect } from 'react-router-dom';

import Context from './context/context';
import { mainPageData } from './context/mainPageData';
import RouterLayout from './layouts/RouterLayout';
import About from './pages/About';
import BigCredit from './pages/BigCredit';
import Contacts from './pages/Contacts';
import CreditItem from './pages/CreditItem';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import OneCreditPage from './pages/OneCreditPage/OneCreditPage';
import ScrollToTop from './utils/ScrollToTop';

// Для того, чтобы внутри приложения работали компоненты из react-router-dom, нужно обернуть приложение
// в контекст роутера (<BrowserRouter>). Однако этот компонент изначально возвращает только те компоненты, которые он
// рендерит по заданному урлу => не понятно, как отрисовывать общие компоненты по типу header и footer. Для решения
// этой проблемы нужно создать родительский роут, который будет отрисовывать общие компоненты (<RouterLayout>) + все
// то, что будут отрисовывать дочерние роуты (все роутеры приложения) для каждого урла (<Outlet>).

// эти два массива нужны для, так сказать, проверки правильности урла
// (кредитов 18, следовательно id > 0 and < 19)
const smallArr = [
   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

const bigArr = [1, 2, 3, 4, 5, 6];

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
            path: '/BigCredit/:type/:id',
            element: (
               <Context.Provider value={''}>
                  <OneCreditPage />
               </Context.Provider>
            ),
            loader: async ({ params }) => {
               if ((params.type != 'small') & (params.type != 'big')) {
                  return redirect('/error');
               }
               if ((params.type == 'big') & !(params.id in bigArr)) {
                  return redirect('/error');
               }
               if (params.id == 0) {
                  return redirect('/error');
               }
               return null;
            },
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
            path: '/CreditItem/:type/:id',
            element: (
               <Context.Provider value={''}>
                  <OneCreditPage />
               </Context.Provider>
            ),
            loader: async ({ params }) => {
               if ((params.type != 'small') & (params.type != 'big')) {
                  return redirect('/error');
               }
               if ((params.type == 'small') & !(params.id in smallArr)) {
                  return redirect('/error');
               }
               if (params.id == 0) {
                  return redirect('/error');
               }
               return null;
            },
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
