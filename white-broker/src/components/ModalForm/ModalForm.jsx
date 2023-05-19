import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
   const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

   const {
      register,
      handleSubmit,
      reset,
      // resetField - reset поля (хорошо подходит для формы авторизации!)
      formState: { errors },
   } = useForm();

   // лучше обнулять форму в useEffect (так в доке написано)
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
      <form
         onSubmit={handleSubmit(submit, errorHandler)}
         className="m-auto mt-12 flex w-1/5 flex-col items-center bg-slate-300 p-4"
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
            className="mb-2 mt-2 p-1"
            placeholder="roflan"
         />
         <p className=" text-red-700">{errors.name?.message}</p>

         <input
            type="number"
            placeholder="88005553535"
            {...register('phoneNumber', {
               required: 'Необходимо ввести номер телефона',
               pattern: {
                  value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                  message: 'Номер телефона введен некорректно',
               },
            })}
            className="mb-2 mt-2 p-1"
         />
         <p className=" text-red-700">{errors.phoneNumber?.message}</p>

         <input
            type="number"
            placeholder="сто тыщ миллионов!"
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
            className="mb-2 mt-2 p-1"
         />
         <p className=" text-red-700">{errors.sum?.message}</p>

         <button type="submit">ебаться в жопу!</button>
         <label className="flex">
            <input
               type="checkbox"
               {...register('allowPolicy', {
                  required:
                     'Необходимо дать согласие на обработку персональных данных',
               })}
            />
            <p> чел ну нажми галочку 👉👈</p>
         </label>
         <p className=" text-red-700">{errors.allowPolicy?.message}</p>
      </form>
   );
};

export default Form;
