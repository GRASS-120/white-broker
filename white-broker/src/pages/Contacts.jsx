import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Contacts = () => {
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

   const commentEnterSubmit = (e) => {
      if (e.key === 'Enter' && e.shiftKey == false) {
         const data = { content: e.target.value };
         return handleSubmit(CommentOnSubmit(data));
      }
   };

   return (
      <div>
         <div className="m-auto max-w-[1440px]">
            <div className="my-10">
               <div className=" text-4xl font-bold">
                  Кредитный <p>Белый Брокер</p>
               </div>
               <div className="text-[#5B41FF]">инн 77777777777777</div>
            </div>
            <div className="mb-10 ml-3 flex flex-col justify-between lg:flex-row">
               <div>
                  <div className="mb-10 text-4xl font-bold">
                     Свяжитесь с <p>нами</p>
                  </div>
                  <div>
                     <li className="mb-3 flex list-none items-center text-2xl font-semibold">
                        <img className="mr-3" src="call.png" alt="" />
                        +7 (999) 999-99-99
                     </li>
                     <li className="mb-3 flex list-none items-center text-2xl font-semibold">
                        <img className="mr-3" src="email.png" alt="" />
                        whiteBroker@mail.ru
                     </li>
                     <li className="mb-3 flex list-none items-center text-2xl font-semibold">
                        <img className="mr-3" src="geo.png" alt="" />
                        г. Томск ул. такая-то, д. такой-то
                     </li>
                     <li className="mb-3 flex list-none items-center text-2xl font-semibold">
                        <img className="mr-3" src="time.png" alt="" />
                        Пн - Пт с 9:00 до 20:00
                     </li>
                  </div>
                  <div className="mb-10">
                     Соц. сети
                     <div className="flex">
                        <img className="mr-3" src="telegram-b.png" alt="" />
                        <img src="whatsapp-b.png" alt="" />
                     </div>
                  </div>
               </div>
               <div className="mr-2">
                  <div className=" mb-1 text-2xl">Форма обратной связи</div>
                  <p className="mb-3">
                     Вы можете оставить ваши данные и интересующий вас вопрос
                  </p>
                  <form
                     onSubmit={handleSubmit(submit, errorHandler)}
                     className="flex flex-col"
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
                              message: 'Максимальная длина строки: 50',
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
                        type="number"
                        placeholder="+7 (999) 999-99-99"
                     />
                     <p className=" text-red-700">
                        {errors.phoneNumber?.message}
                     </p>

                     <textarea
                        {...register('comment', {
                           required: 'Необходимо ввести текст комментария',
                           minLength: {
                              value: 2,
                              message: 'Минимальная длина строки: 2',
                           },
                           maxLength: {
                              value: 250,
                              message: 'Максимальная длина строки: 250',
                           },
                        })}
                        onKeyPress={commentEnterSubmit}
                        className="mb-1 rounded-lg border-2 border-solid border-[#5B41FF] p-3 outline-none"
                        name="content"
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Комментарий"
                     ></textarea>
                     <p className=" text-red-700">{errors.comment?.message}</p>

                     <button
                        type="submit"
                        className="rounded-xl bg-[#5B41FF] p-3 text-white transition-all hover:brightness-125"
                     >
                        ОСТАВИТЬ ЗАЯВКУ
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contacts;
