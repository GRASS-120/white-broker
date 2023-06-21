import { useContext } from 'react';
import Context from '../context/context';
import PurpleBlocks from '../components/common/PurpleBlocks/PurpleBlocks';
import Catalog from '../components/common/Catalog/Catalog';
import SkillsDark from '../components/common/Skills/SkillsDark';
import Help from '../components/common/Help/Help';

const BigCredit = () => {
   const data = useContext(Context);
   return (
      <div>
            <div className='bg-gradient-to-tr from-[#BD00FF] to-[#0276FF]'>
               <div className='max-w-[1440px] m-auto '>
                  <div className='flex justify-center items-end mx-4'>
                     <div className='mb-10 lg:mb-24'>
                        <div className='text-white'>
                            <p className=' text-3xl font-bold my-5'>КРЕДИТ ДЛЯ МАЛОГО БИЗНЕСА</p>  
                            <p className=' text-2xl font-semibold mb-5'>от 1 дня</p>
                            <ul className=' ml-9 mb-3'>
                                 <li className='list-disc'>ИП и Юридическое лицо</li>
                                 <li className='list-disc'>Зарегистрирована на территории РФ</li>
                            </ul>
                        </div>
                        <div className=' max-w-[625px] bg-white rounded-2xl p-8'>
                           <div className='flex flex-wrap mb-5'>
                              <div className=' mr-10 lg:mb-12 sm:mr-44'>
                                 <p className='text-[#0276FF] text-[28px] font-bold'>до 50 млн</p>
                                 <p>без залога</p>
                              </div>
                              <div className=''>
                                 <p className='text-[#0276FF] text-[28px] font-bold'>до 5 дней</p>
                                 <p>решение по кредиту</p>
                              </div>
                              <div className=' mr-10'>
                                 <p className='text-[#0276FF] text-[28px] font-bold'>от 6.5% годовых</p>
                                 <p>без скрытых комиссий и платежей</p>
                              </div>
                              <div className=''>
                                 <p className='text-[#0276FF] text-[28px] font-bold'>до 10 лет</p>
                                 <p>в зависимости от продукта</p>
                              </div>
                           </div>
      
                           <button className='text-white bg-[#5B41FF] p-2 rounded-lg'>ОСТАВИТЬ ЗАЯВКУ</button>
                        </div>
                     </div>
                     <div>
                        <img className='w-[607px] hidden lg:block' src="Smiling-Business-Man-Standing-PNG-Image.png" alt="" />
                     </div>
                  </div>

                  
               </div>
            </div>

            <PurpleBlocks />

            <Catalog />
            <SkillsDark />
            <Help />
         </div>
   )
};

export default BigCredit;
