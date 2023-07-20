import classNames from 'classnames';
import { Suspense, lazy, useState } from 'react';
import { useParams } from 'react-router-dom';

import Title from '../../components/ui/Title';
import { bigCreditData } from '../../context/bigCredit';
import { infoTabsData as contextData } from '../../context/infoTabsData';
import { smallCreditData } from '../../context/smallCredit';

const OneCreditPage = () => {
   const { type, id } = useParams();
   const [currentTabId, setCurrentTabId] = useState(0);

   let titles = [];
   let oneTitle = '';
   if (type == 'big') {
      titles = bigCreditData.credit;
      switch (id) {
         case 1:
            oneTitle = titles[2].title;
            break;
         case 2:
            oneTitle = titles[7].title;
            break;
         case 3:
            oneTitle = titles[8].title;
            break;
         case 4:
            oneTitle = titles[9].title;
            break;
         case 5:
            oneTitle = titles[10].title;
            break;
         default:
            break;
      }
   } else if (type == 'small') {
      titles = smallCreditData.credits;
      oneTitle = titles[id - 1].title;
   }

   const Tab0 = lazy(
      async () =>
         await import(
            `../../components/common/InfoTabs/${type}Credit/${type}CreditTab_${id}/${type}CreditTab_${id}_0.jsx`
         )
   );

   const Tab1 = lazy(
      async () =>
         await import(
            `../../components/common/InfoTabs/${type}Credit/${type}CreditTab_${id}/${type}CreditTab_${id}_1.jsx`
         )
   );

   const Tab2 = lazy(
      async () =>
         await import(
            `../../components/common/InfoTabs/${type}Credit/${type}CreditTab_${id}/${type}CreditTab_${id}_2.jsx`
         )
   );

   const Tab3 = lazy(
      async () =>
         await import(
            `../../components/common/InfoTabs/${type}Credit/${type}CreditTab_${id}/${type}CreditTab_${id}_3.jsx`
         )
   );

   return (
      <div className="mt-12 md:mt-16">
         <div className="mx-6 my-9">
            <p className=" mb-9 mt-20 text-center text-4xl font-semibold">
               {oneTitle}
            </p>
            <div className="m-auto flex max-w-[1440px] flex-col justify-center md:justify-between">
               <div className="m-auto flex flex-wrap">
                  {contextData.map((item) => (
                     <p
                        className={classNames(
                           'cursor-pointer p-2 text-xl font-semibold lg:p-5',
                           {
                              'text-[#5B41FF] underline':
                                 currentTabId == item.id,
                           }
                        )}
                        id={'tab_' + item.id}
                        key={'tab_' + item.id}
                        onClick={(e) =>
                           setCurrentTabId(Number(e.target.id.split('_')[1]))
                        }
                     >
                        {item.title}
                     </p>
                  ))}
               </div>

               <hr className="w-ful mb-14 h-[1px] max-w-[1440px] bg-slate-200"></hr>

               {currentTabId == 0 && (
                  <Suspense fallback={<Title>Загрузка...</Title>}>
                     <Tab0 />
                  </Suspense>
               )}
               {currentTabId == 1 && (
                  <Suspense fallback={<Title>Загрузка...</Title>}>
                     <Tab1 />
                  </Suspense>
               )}
               {currentTabId == 2 && (
                  <Suspense fallback={<Title>Загрузка...</Title>}>
                     <Tab2 />
                  </Suspense>
               )}
               {currentTabId == 3 && (
                  <Suspense fallback={<Title>Загрузка...</Title>}>
                     <Tab3 />
                  </Suspense>
               )}
            </div>
         </div>
      </div>
   );
};

export default OneCreditPage;
