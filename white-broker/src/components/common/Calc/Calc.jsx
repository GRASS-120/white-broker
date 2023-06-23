import { useState } from 'react';

import { mainPageData } from '../../../context/mainPageData';
import { monthToString, sumToString } from '../../../utils/calc';
import Button from '../../ui/Button';

const Calc = () => {
   const [creditPreset, setCreditPreset] = useState(
      mainPageData.calculator.creditPresets[0]
   );
   const [sumTrackbarVal, setSumTrackbarVal] = useState(creditPreset.sum_num);
   const [monthTrackbarVal, setMonthTrackbarVal] = useState(
      creditPreset.deadline_num
   );

   const changeSelectOpt = (index) => {
      setCreditPreset(mainPageData.calculator.creditPresets[index]);
      setSumTrackbarVal(mainPageData.calculator.creditPresets[index].sum_num);
      setMonthTrackbarVal(
         mainPageData.calculator.creditPresets[index].deadline_num
      );
   };

   const changeSumByTrack = (value) => {
      setSumTrackbarVal(value);
      setCreditPreset({
         ...creditPreset,
         sum_num: value,
         sum: sumToString(value),
      });
   };

   const changeMonthByTrack = (value) => {
      setMonthTrackbarVal(value);
      setCreditPreset({
         ...creditPreset,
         deadline_num: value,
         deadline: monthToString(value),
      });
   };

   return (
      <div className="my-10">
         <div className="m-auto max-w-[1440px]">
            <div className="text-center text-4xl font-bold">
               {mainPageData.calculator.title}
            </div>
            <p className="my-4 text-center text-xl">
               {mainPageData.calculator.subtitle}
            </p>

            <div className="mx-3 flex flex-col justify-center md:flex-row">
               <div className="max-w-[650px]">
                  <select
                     className="max-w-[100px]"
                     onChange={(e) => changeSelectOpt(e.target.value)}
                  >
                     {mainPageData.calculator.creditPresets.map(
                        (item, index) => (
                           <option key={'select_opt_' + index} value={index}>
                              {item.name}
                           </option>
                        )
                     )}
                  </select>
                  <div>
                     <div>
                        <div className="flex justify-between">
                           <p>Сумма кредита</p>
                           <p>{creditPreset.sum}</p>
                        </div>
                        <input
                           type="range"
                           value={sumTrackbarVal}
                           onChange={(e) => changeSumByTrack(e.target.value)}
                           min="500000"
                           max="30000000"
                        />
                        {/* <div className="h-4 w-full bg-[#0276FF]"></div> */}
                        <div className="flex justify-between">
                           <p>5 000 000 ₽</p>
                           <p>30 000 000 ₽</p>
                        </div>
                     </div>

                     <div>
                        <div className="flex justify-between">
                           <p>Срок</p>
                           <p>{creditPreset.deadline}</p>
                        </div>
                        <input
                           type="range"
                           value={monthTrackbarVal}
                           onChange={(e) => changeMonthByTrack(e.target.value)}
                           min="1"
                           max="60"
                        />
                        {/* <div className="h-4 w-full bg-[#0276FF]"></div> */}
                        <div className="flex justify-between">
                           <p>1 месяц</p>
                           <p>60 месяцев</p>
                        </div>
                     </div>
                     <Button>ОСТАВИТЬ ЗАЯВКУ</Button>
                  </div>
               </div>

               <div className="rounded-xl border-2 border-solid border-[#5B41FF] p-5">
                  <p>Подберите подходящие вам условия</p>

                  <div>{creditPreset.name}</div>
                  <div className="flex">
                     <p className="font-bold">
                        Cумма -{' '}
                        <span className="text-[#0276FF]">
                           {creditPreset.sum}
                        </span>
                     </p>
                     <p className="font-bold">
                        Срок -{' '}
                        <span className="text-[#0276FF]">
                           {creditPreset.deadline}
                        </span>
                     </p>
                  </div>
                  <div>
                     <div>
                        <p className="font-bold">{creditPreset.percent}</p>
                        <p className="text-[#0276FF]">Процентная ставка</p>
                     </div>
                     <div>
                        <p className="font-bold">{creditPreset.payment}</p>
                        <p className="text-[#0276FF]">Ежемесячный платеж</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Calc;
