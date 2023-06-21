import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Help = () => {
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
      <div className="m-auto my-28 max-w-[1440px]">
         <div className=" rounded-xl p-10 shadow-lg">
            <div className=" mb-3 text-3xl font-semibold">Нужна помощь ? </div>
            <div className="mb-8 max-w-[900px]">
               STOLITSA FINANCE взаимодействуют со многими финансовыми
               структурами и компаниями: банками, страховыми, оценочными
               компаниями, агентствами недвижимости
            </div>
            <form
               onSubmit={handleSubmit(submit, errorHandler)}
               className="flex flex-col lg:flex-row"
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
                        message: 'Максимальная длина строки длина строки: 50',
                     },
                     pattern: {
                        value: /^[a-zа-яё]+$/i,
                        message:
                           'В имени не должно быть цифр или других символов, только буквы',
                     },
                  })}
                  className="mb-2 rounded-xl border-2 border-solid border-[#5B41FF] p-3 outline-none lg:mb-0 lg:mr-3"
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
                  className=" mb-2 rounded-xl border-2 border-solid border-[#5B41FF] p-3 outline-none lg:mb-0 lg:mr-3"
                  type="phone"
                  placeholder="+7 (999) 999-99-99"
               />
               <p className=" text-red-700">{errors.phoneNumber?.message}</p>

               <input
                  {...register('sum', {
                     required: 'Необходимо ввести сумму',
                     min: {
                        value: 500000,
                        message: 'Минимальная сумма кредита: 500.000₽',
                     },
                     max: {
                        value: 10000000,
                        message: 'Максимальная сумма кредита: 1.000.0000₽',
                     },
                  })}
                  className="mb-2 rounded-xl border-2 border-solid border-[#5B41FF] p-3 outline-none lg:mb-0 lg:mr-3"
                  type="number"
                  placeholder="Сумма от 500 000 руб"
               />
               <p className=" text-red-700">{errors.sum?.message}</p>

               <button
                  type="submit"
                  className="rounded-xl bg-[#5B41FF] p-3 text-white transition-all hover:brightness-125"
               >
                  ОСТАВИТЬ ЗАЯВКУ
               </button>
            </form>
         </div>
      </div>
   );
};

export default Help;
