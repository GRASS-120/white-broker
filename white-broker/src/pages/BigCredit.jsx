import { useContext, useState } from 'react';

import Catalog from '../components/common/Catalog/Catalog';
import Help from '../components/common/Help/Help';
import InfoTabs from '../components/common/InfoTabs/InfoTabs';
import Modal from '../components/common/ModalForm/Modal';
import ModalForm from '../components/common/ModalForm/ModalForm';
import PurpleBlocks from '../components/common/PurpleBlocks/PurpleBlocks';
import SkillsDark from '../components/common/Skills/SkillsDark';
import Context from '../context/context';

const BigCredit = () => {
   const data = useContext(Context);
   const [isOpened, setIsOpened] = useState(false);

   return (
      <div className="mt-16 lg:mt-24">
         <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
            <ModalForm setIsOpened={setIsOpened} />
         </Modal>
         <div className="bg-gradient-to-tr from-[#BD00FF] from-10% via-[#0685f5] via-100% to-[#0276FF] to-40%">
            <div className="m-auto max-w-[1440px] ">
               <div className="mx-4 flex items-center justify-center">
                  <div className="mb-10 ">
                     <div className="text-white">
                        <p className=" my-5 text-3xl font-bold">
                           КРЕДИТ ДЛЯ МАЛОГО БИЗНЕСА
                        </p>
                        <p className=" mb-5 text-2xl font-semibold">от 1 дня</p>
                        <ul className=" mb-3 ml-9">
                           <li className="list-disc">ИП и Юридическое лицо</li>
                           <li className="list-disc">
                              Зарегистрирована на территории РФ
                           </li>
                        </ul>
                     </div>
                     <div className=" max-w-[625px] rounded-2xl bg-white p-8">
                        <div className="mb-5 flex flex-wrap">
                           <div className=" mr-10 sm:mr-44 lg:mb-12">
                              <p className="text-[28px] font-bold text-[#0276FF]">
                                 до 50 млн
                              </p>
                              <p>без залога</p>
                           </div>
                           <div className="">
                              <p className="text-[28px] font-bold text-[#0276FF]">
                                 до 5 дней
                              </p>
                              <p>решение по кредиту</p>
                           </div>
                           <div className=" mr-10">
                              <p className="text-[28px] font-bold text-[#0276FF]">
                                 от 6.5% годовых
                              </p>
                              <p>без скрытых комиссий и платежей</p>
                           </div>
                           <div className="">
                              <p className="text-[28px] font-bold text-[#0276FF]">
                                 до 10 лет
                              </p>
                              <p>в зависимости от продукта</p>
                           </div>
                        </div>

                        <button
                           onClick={() => setIsOpened(true)}
                           className="rounded-lg bg-[#5B41FF] p-2 text-white"
                        >
                           ОСТАВИТЬ ЗАЯВКУ
                        </button>
                     </div>
                  </div>
                  <div>
                     <img
                        className="ml-6 hidden max-h-[455px] rounded-xl lg:block"
                        src="CreditImg.jpg"
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </div>

         <PurpleBlocks />
         <InfoTabs />
         <Catalog />
         <SkillsDark />
         <Help />
      </div>
   );
};

export default BigCredit;
