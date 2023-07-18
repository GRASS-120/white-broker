import { useState } from 'react';
import Modal from '../ModalForm/Modal';
import ModalForm from '../ModalForm/ModalForm.jsx';

const Catalog = ({ data }) => {
   const [isOpened, setIsOpened] = useState(false);
   return (
      <div className="m-auto flex max-w-[1440px] flex-wrap justify-around">
         <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
            <ModalForm setIsOpened={setIsOpened} />
         </Modal>
         {data.map((item, index) => (
            <div
               key={'big_credit-' + index}
               className="group mb-10 w-[305px] rounded-xl bg-slate-100 p-5 shadow hover:shadow-2xl"
            >
               <div className=" text-base font-semibold">{item.title}</div>
               <p className="mb-2 mt-3">Сумма: {item.sum}</p>
               <p className="mb-2">Ставка: {item.payment}</p>
               <p className="">Срок:{item.deadline}</p>
               <div className="mt-6 flex justify-between opacity-100 transition-opacity group-hover:opacity-100 lg:opacity-0">
                  <button
                     onClick={() => setIsOpened(true)}
                     className=" mr-2 rounded-lg bg-[#5B41FF] p-2 px-6 text-sm text-white"
                  >
                     ПОЛУЧИТЬ
                  </button>
                  {item.description && (
                     <button className=" mr-2 rounded-lg bg-[#5B41FF] p-2 px-6 text-sm text-white">
                        ПОДРОБНЕЕ
                     </button>
                  )}
               </div>
            </div>
         ))}
      </div>
   );
};

export default Catalog;
