import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Help from '../components/common/Help/Help';
import Product from '../components/common/Product/Product';
import PurpleBlocks from '../components/common/PurpleBlocks/PurpleBlocks';
import SkillsDark from '../components/common/Skills/SkillsDark';

const CreditItem = () => {
   const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   useEffect(() => {
      reset();
      setIsSubmitSuccessful(false);
   }, [isSubmitSuccessful]);

   const submit = (data) => {
      console.log(data);
      setIsSubmitSuccessful(true);
   };

   const errorHandler = (e) => {
      console.log(e);
   };

   return (
      <div>
         <div className="m-auto my-10 max-w-[1440px] text-white">
            <div className="rounded-xl bg-gradient-to-tr from-[#BD00FF] to-[#0276FF] p-8">
               <div className="mb-3">
                  <div className=" mb-3 text-5xl font-bold">
                     КРЕДИТ ДЛЯ РАЗВИТИЯ БИЗНЕСА
                  </div>
                  <div>
                     <li>до 3 000 000 000 Р</li>
                     <li>Решение от 3-х дней</li>
                  </div>
               </div>
               <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                  <div className="flex flex-col lg:max-w-2xl">
                     <div>
                        <p className="mb-5">
                           Нужен кредит для развития бизнеса? Возьмите через
                           компанию БЕЛЫЙ БРОКЕР быстрое оформление, лояльный
                           подход к кредитной истории
                        </p>
                     </div>
                     <form
                        onSubmit={handleSubmit(submit, errorHandler)}
                        className=" flex flex-col  rounded-xl bg-white  px-10 py-6"
                     >
                        <input
                           {...register('name', {
                              required: 'Необходимо ввести ваше имя',
                              minLength: {
                                 value: 2,
                                 message: 'Минимальная длина строки: 2',
                              },
                              maxLength: {
                                 value: 50,
                                 message:
                                    'Максимальная длина строки длина строки: 50',
                              },
                              pattern: {
                                 value: /^[a-zа-яё]+$/i,
                                 message:
                                    'В имени не должно быть цифр или других символов, только буквы',
                              },
                           })}
                           className="mb-1 rounded-lg border-2 border-solid border-[#5B41FF] p-3 outline-none"
                           type="text"
                           placeholder="Ваше имя"
                        />
                        <p className=" text-red-700">{errors.name?.message}</p>

                        <input
                           {...register('phoneNumber', {
                              required: 'Необходимо ввести номер телефона',
                              pattern: {
                                 value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                                 message: 'Номер телефона введен некорректно',
                              },
                           })}
                           className="mb-1 rounded-lg border-2 border-solid border-[#5B41FF] p-3 outline-none"
                           type="text"
                           placeholder="+7 (999) 999-99-99"
                        />
                        <p className=" text-red-700">
                           {errors.phoneNumber?.message}
                        </p>

                        <input
                           {...register('sum', {
                              required: 'Необходимо ввести сумму',
                              min: {
                                 value: 500000,
                                 message: 'Минимальная сумма кредита: 500.000₽',
                              },
                              max: {
                                 value: 10000000,
                                 message:
                                    'Максимальная сумма кредита: 1.000.0000₽',
                              },
                           })}
                           className="mb-1 rounded-lg border-2 border-solid border-[#5B41FF] p-3 outline-none"
                           type="text"
                           placeholder="Сумма от 500 000 руб"
                        />
                        <p className=" text-red-700">{errors.sum?.message}</p>

                        <button
                           type="submit"
                           className="rounded-xl bg-[#5B41FF] p-3 text-white transition-all hover:brightness-125"
                        >
                           ОСТАВИТЬ ЗАЯВКУ
                        </button>
                        <label className="text-xs text-[#5B41FF]">
                           <input
                              type="checkbox"
                              {...register('allowPolicy', {
                                 required:
                                    'Необходимо дать согласие на обработку персональных данных',
                              })}
                              className="mr-3 "
                           />
                           Отправляя заявку вы принимаете условия обработки
                           персональных данных
                        </label>
                        <p className=" text-red-700">
                           {errors.allowPolicy?.message}
                        </p>
                     </form>
                  </div>
                  <div>
                     <img
                        className="hidden lg:block"
                        src="meeting.png"
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </div>
         <PurpleBlocks />
         <SkillsDark />
         <Help />
         <Product />
      </div>
   );
};

export default CreditItem;
