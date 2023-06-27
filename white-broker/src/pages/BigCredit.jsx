import { useContext } from 'react';
import Catalog from '../components/common/Catalog/Catalog';
import Help from '../components/common/Help/Help';
import InfoTabs from '../components/common/InfoTabs/InfoTabs';
import PurpleBlocks from '../components/common/PurpleBlocks/PurpleBlocks';
import SkillsDark from '../components/common/Skills/SkillsDark';
import Context from '../context/context';

const BigCredit = () => {
   const data = useContext(Context);
   return (
      <div>
         <div className="bg-gradient-to-tr from-[#BD00FF] to-[#0276FF]">
            <div className="m-auto max-w-[1440px] ">
               <div className="mx-4 flex items-end justify-center">
                  <div className="mb-10 lg:mb-24">
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

                        <button className="rounded-lg bg-[#5B41FF] p-2 text-white">
                           ОСТАВИТЬ ЗАЯВКУ
                        </button>
                     </div>
                  </div>
                  <div>
                     <img
                        className="hidden w-[607px] lg:block"
                        src="Smiling-Business-Man-Standing-PNG-Image.png"
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
