import { useState } from 'react';

import { mainPageData } from '../../../context/mainPageData';
import {
   calcMonthPayment,
   monthToString,
   sumToString,
} from '../../../utils/calc';
import Button from '../../ui/Button';
import Modal from '../ModalForm/Modal';
import ModalForm from '../ModalForm/ModalForm';

const Calc = () => {
   const [isOpened, setIsOpened] = useState(false);

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
      calcMonthPayment(
         creditPreset.sum_num,
         creditPreset.percent,
         creditPreset.deadline_num
      );
   };

   const changeSumByTrack = (value) => {
      setSumTrackbarVal(value);
      setCreditPreset({
         ...creditPreset,
         sum_num: value,
         sum: sumToString(value),
         name: 'Кастомный кредит',
         payment: sumToString(
            calcMonthPayment(
               value,
               creditPreset.percent,
               creditPreset.deadline_num
            )
         ),
      });
   };

   const changeMonthByTrack = (value) => {
      setMonthTrackbarVal(value);
      setCreditPreset({
         ...creditPreset,
         deadline_num: value,
         deadline: monthToString(value),
         payment: sumToString(
            calcMonthPayment(creditPreset.sum_num, creditPreset.percent, value)
         ),
      });
   };

   return (
      <div className="my-10">
         <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
            <ModalForm
               setIsOpened={setIsOpened}
               defaultSum={creditPreset.sum_num}
            />
         </Modal>
         <div className="m-auto max-w-[1440px]">
            <div className="text-center text-4xl font-bold">
               {mainPageData.calculator.title}
            </div>
            <p className="my-4 text-center text-xl">
               {mainPageData.calculator.subtitle}
            </p>

            <div className="mx-3 mt-16 flex flex-col-reverse justify-center md:flex-row">
               <div className="mb-6 mr-3 max-w-[650px] lg:mr-6">
                  <select
                     className="mb-4 max-w-[260px] cursor-pointer rounded-lg border border-solid border-black p-1 sm:max-w-[600px] md:mb-7"
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
                     <div className=" mb-7">
                        <div className="flex justify-between">
                           <p>Сумма кредита</p>
                           <p>{creditPreset.sum}</p>
                        </div>
                        <input
                           className="my-2 w-full cursor-pointer"
                           type="range"
                           value={sumTrackbarVal}
                           onChange={(e) => changeSumByTrack(e.target.value)}
                           min="500000"
                           max="30000000"
                        />
                        <div className="flex justify-between text-sm">
                           <p className="text-[#0276FF]">5 000 000 ₽</p>
                           <p className="">30 000 000 ₽</p>
                        </div>
                     </div>

                     <div className="mb-5">
                        <div className="flex justify-between">
                           <p>Срок</p>
                           <p>{creditPreset.deadline}</p>
                        </div>
                        <input
                           className="my-2 w-full cursor-pointer"
                           type="range"
                           value={monthTrackbarVal}
                           onChange={(e) => changeMonthByTrack(e.target.value)}
                           min="1"
                           max="60"
                        />
                        <div className="flex justify-between text-sm">
                           <p className="text-[#0276FF]">1 месяц</p>
                           <p>60 месяцев</p>
                        </div>
                     </div>
                     <Button onClick={() => setIsOpened(true)}>
                        ОСТАВИТЬ ЗАЯВКУ
                     </Button>
                  </div>
               </div>

               <div className=" mb-6 mt-0 rounded-xl border-2 border-solid border-[#5B41FF] p-5 lg:w-[500px]">
                  <p className="mb-4 text-xs ">
                     Подберите подходящие вам условия
                  </p>

                  <p className="text-3xl font-semibold">{creditPreset.name}</p>
                  <div className="my-6 flex flex-wrap justify-between md:my-12">
                     <p className=" mr-3 text-lg font-bold">
                        Cумма -{' '}
                        <span className="text-[#0276FF]">
                           {creditPreset.sum}
                        </span>
                     </p>
                     <p className="text-lg font-bold">
                        Срок -{' '}
                        <span className="text-[#0276FF]">
                           {creditPreset.deadline}
                        </span>
                     </p>
                  </div>
                  <div className="flex  justify-center sm:flex-row">
                     <div>
                        <p className="text-2xl font-bold md:text-3xl">
                           {creditPreset.percent}
                        </p>
                        <p className="w-40 text-xs text-[#0276FF] md:text-xl">
                           Процентная ставка
                        </p>
                     </div>
                     <div>
                        <p className=" text-2xl font-bold md:text-3xl">
                           {creditPreset.payment}
                        </p>
                        <p className="w-40 text-xs text-[#0276FF] md:text-xl">
                           Ежемесячный платеж
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

for (let e of document.querySelectorAll('input[type="range"]')) {
   e.style.setProperty('--value', e.value);
   e.style.setProperty('--min', e.min == '' ? '0' : e.min);
   e.style.setProperty('--max', e.max == '' ? '100' : e.max);
   e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

export default Calc;
