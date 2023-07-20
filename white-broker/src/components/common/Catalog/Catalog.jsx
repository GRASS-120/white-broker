import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../ModalForm/Modal';
import ModalForm from '../ModalForm/ModalForm.jsx';

const Catalog = ({ data, type }) => {
   const [isOpened, setIsOpened] = useState(false);

   let slug = '';
   if (type == 'big') {
      slug = 'BigCredit';
   } else if (type == 'small') {
      slug = 'CreditItem';
   }

   return (
      <div className="m-auto flex max-w-[1440px] flex-wrap justify-center md:justify-stretch ">
         <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
            <ModalForm setIsOpened={setIsOpened} />
         </Modal>
         {data.map((item, index) => (
            <div
               key={'big_credit-' + index}
               className=" relative group mb-10 sm:ml-10 w-[305px] h-[270px] rounded-xl bg-slate-100 p-5 shadow hover:shadow-2xl"
            >
               <div className=" text-base font-semibold">{item.title}</div>
               <p className="mb-2 mt-3">Сумма: {item.sum}</p>
               <p className="mb-2">Ставка: {item.payment}</p>
               <p className="">Срок:{item.deadline}</p>
               <div className=" absolute bottom-[20px] flex flex-col fold:flex-row justify-between opacity-100 transition-opacity group-hover:opacity-100 lg:opacity-0">
                  <button
                     onClick={() => setIsOpened(true)}
                     className=" mr-2 mb-2 fold:mb-0 rounded-lg bg-[#5B41FF] p-2 px-6 text-sm text-white transition-all hover:brightness-125"
                  >
                     ПОЛУЧИТЬ
                  </button>
                  {item.description && (
                     <button className=" mr-2 rounded-lg bg-[#5B41FF] p-2 px-6 text-sm text-white transition-all hover:brightness-125">
                        <NavLink to={`${type}/${item.pageId}`}>
                           ПОДРОБНЕЕ
                        </NavLink>
                     </button>
                  )}
               </div>
            </div>
         ))}
      </div>
   );
};

export default Catalog;
