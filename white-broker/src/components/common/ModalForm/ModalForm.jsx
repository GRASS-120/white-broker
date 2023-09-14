import axios from 'axios';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ setIsOpened, defaultSum }) => {
   const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
   const {
      register,
      handleSubmit,
      reset,
      // resetField - reset поля (хорошо подходит для формы авторизации!)
      formState: { errors },
   } = useForm({
      defaultValues: {
         name: '',
         phoneNumber: '',
         sum: defaultSum != undefined && defaultSum,
         allowPolicy: false,
      },
   });

   // лучше обнулять форму в useEffect (так в доке написано)
   useEffect(() => {
      reset();
      setIsSubmitSuccessful(false);
   }, [isSubmitSuccessful]);

   const sendEmail = async (data) => {
      const res = {
         message: {
            name: data.name,
            // phoneNumber: data.phoneNumber,
            sum: data.sum,
            credit: 'Овердрафт', // ПОДПРАВЬ ПОТОМ
         },
      };
      await axios
         .post('https://wb-email-sendler.vercel.app/api', res)
         .then(function (response) {
            console.log(response);
         })
         .catch(function (error) {
            console.log(error);
         });
   };

   const submit = (data) => {
      setIsSubmitSuccessful(true);
      setIsOpened(false);

      // const res = {...data, }
      sendEmail(data);
   };

   const errorHandler = (e) => {
      //console.log(e);
   };

   return (
      <div className="w-[450px] pt-6 max-[495px]:w-[335px]">
         <p className="text-center text-xl font-semibold">Заявка</p>
         <p className="text-center text-sm font-normal">
            С вами свяжутся в течение 5 минут
         </p>
         <form
            onSubmit={handleSubmit(submit, errorHandler)}
            className="flex flex-col rounded-xl bg-white px-10 py-6"
         >
            <p className=" text-red-700">{errors.name?.message}</p>
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
               className={classNames(
                  'mb-2 rounded-lg border-2 border-solid border-[#5B41FF] p-3 text-black outline-none ',
                  {
                     'border-red-700': errors.name,
                  }
               )}
               type="text"
               placeholder="Ваше имя"
            />

            <p className=" text-red-700">{errors.phoneNumber?.message}</p>
            {/* <input
               {...register('phoneNumber', {
                  required: 'Необходимо ввести номер телефона',
                  pattern: {
                     value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                     message: 'Номер телефона введен некорректно',
                  },
               })}
               className={classNames(
                  'mb-2 rounded-lg border-2 border-solid border-[#5B41FF] p-3 text-black outline-none ',
                  {
                     'border-red-700': errors.phoneNumber,
                  }
               )}
               type="text"
               placeholder="+7 (999) 999-99-99"
            /> */}

            <p className=" text-red-700">{errors.sum?.message}</p>
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
               className={classNames(
                  'mb-2 rounded-lg border-2 border-solid border-[#5B41FF] p-3 text-black outline-none ',
                  {
                     'border-red-700': errors.sum,
                  }
               )}
               type="number"
               placeholder="Сумма от 500 000 руб"
            />

            <button
               type="submit"
               className="mb-2 rounded-xl bg-[#5B41FF] p-3 text-white transition-all hover:brightness-125"
            >
               ОСТАВИТЬ ЗАЯВКУ
            </button>

            <p className="text-red-700">{errors.allowPolicy?.message}</p>
            <label className="mb-2 text-xs text-[#5B41FF]">
               <input
                  type="checkbox"
                  {...register('allowPolicy', {
                     required:
                        'Необходимо дать согласие на обработку персональных данных',
                  })}
                  className={classNames('mr-3 ', {
                     'border-red-700': errors.allowPolicy,
                  })}
               />
               Отправляя заявку вы принимаете условия обработки персональных
               данных
            </label>
         </form>
      </div>
   );
};

export default Form;
