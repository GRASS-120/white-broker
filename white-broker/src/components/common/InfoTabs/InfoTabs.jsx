import classNames from 'classnames';
import { useState } from 'react';

import { infoTabsData as contextData } from '../../../context/infoTabsData';
import InfoTab_0 from './InfoTab_0';
import InfoTab_1 from './InfoTab_1';
import InfoTab_2 from './InfoTab_2';
import InfoTab_3 from './InfoTab_3';

const InfoTabs = () => {
   const [currentTabId, setCurrentTabId] = useState(0);

   return (
      <div className="mx-6 my-9">
         <div className="m-auto flex max-w-[1440px] flex-col justify-center md:justify-between">
            <div className="m-auto flex flex-wrap">
               {contextData.map((item) => (
                  <p
                     className={classNames(
                        'cursor-pointer p-2 lg:p-5 text-xl font-semibold',
                        {
                           'text-[#5B41FF] underline': currentTabId == item.id,
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

            {currentTabId == 0 && <InfoTab_0 />}
            {currentTabId == 1 && <InfoTab_1 />}
            {currentTabId == 2 && <InfoTab_2 />}
            {currentTabId == 3 && <InfoTab_3 />}
         </div>
      </div>
   );
};

export default InfoTabs;
