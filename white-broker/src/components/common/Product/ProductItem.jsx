import { useState } from 'react';

import Modal from '../ModalForm/Modal';
import ModalForm from '../ModalForm/ModalForm';

const ProductItem = ({ text }) => {
   const [isOpened, setIsOpened] = useState(false);
   return (
      <div className=" relative mx-6 my-6 min-h-[360px] rounded-xl bg-gradient-to-tr from-[#BD00FF] to-[#0276FF] p-5 text-xs text-white transition-all hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] sm:h-[370px] sm:text-base md:min-h-[390px] md:max-w-[360px]">
         <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
            <ModalForm setIsOpened={setIsOpened} />
         </Modal>
         <div className=" text-base font-bold sm:text-xl">{text.title}</div>
         <div className=" my-5 text-[14px] min-h-[80px]">{text.text}</div>
         <div>
            <div className="absolute bottom-16 flex w-3/4 items-center justify-between sm:flex-row sm:items-center">
               <div>
                  <div className="text-xl font-bold  sm:text-2xl">
                     {text.percent.percent}
                  </div>
                  <p className=" max-w-[100px] sm:text-[14px]">
                     минимальная ставка
                  </p>
               </div>
               <div className="my-3">
                  <div className="text-xl  font-bold sm:text-2xl">
                     {text.percent.sum}
                  </div>
                  <p className=" max-w-[100px] sm:text-[14px]">
                     Максимальная сумма
                  </p>
               </div>
            </div>

            <button
               onClick={() => setIsOpened(true)}
               className="absolute bottom-5 w-auto rounded-xl bg-[#fff] px-7 py-3 font-bold text-[#0276FF] transition-all hover:brightness-125 sm:w-full sm:max-w-[320px]"
            >
               ОСТАВИТЬ ЗАЯВКУ
            </button>
         </div>
      </div>
   );
};

export default ProductItem;
