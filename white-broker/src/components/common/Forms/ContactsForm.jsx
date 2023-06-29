import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Modal from '../ModalForm/Modal';
import ModalForm from '../ModalForm/ModalForm';

const ContactsForm = () => {
   const [isOpened, setIsOpened] = useState(false);
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
      // textarea
      let formData = new FormData();
      formData.append('comment', data);

      setIsSubmitSuccessful(true);
   };

   const errorHandler = (e) => {
      //console.log(e);
   };

   // textarea
   const commentEnterSubmit = (e) => {
      if (e.key === 'Enter' && e.shiftKey == false) {
         const data = { comment: e.target.value };
         return handleSubmit(submit(data));
      }
   };

   return (
      <div className="mr-2">
         <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
            {/* <p>modal window</p> */}
            <ModalForm />
         </Modal>
         <button
            onClick={() => setIsOpened(true)}
            className="rounded-xl bg-[#5B41FF] p-3 text-white transition-all hover:brightness-125"
         >
            generate cringe
         </button>
         <div className=" mb-1 text-2xl">Форма обратной связи</div>
         <p className="mb-3">
            Вы можете оставить ваши данные и интересующий вас вопрос
         </p>
         <form
            onSubmit={handleSubmit(submit, errorHandler)}
            className="flex flex-col"
         >
            <p className="text-red-700">{errors.name?.message}</p>
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
               className={classNames(
                  'mb-2 rounded-lg border-2 border-solid border-[#5B41FF] p-3 outline-none ',
                  {
                     'border-red-700': errors.name,
                  }
               )}
               type="text"
               placeholder="Ваше имя"
            />

            <p className=" text-red-700">{errors.phoneNumber?.message}</p>
            <input
               {...register('phoneNumber', {
                  required: 'Необходимо ввести номер телефона',
                  pattern: {
                     value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
                     message: 'Номер телефона введен некорректно',
                  },
               })}
               className={classNames(
                  'mb-2 rounded-lg border-2 border-solid border-[#5B41FF] p-3 outline-none ',
                  {
                     'border-red-700': errors.name,
                  }
               )}
               type="number"
               placeholder="+7 (999) 999-99-99"
            />

            <p className=" text-red-700">{errors.comment?.message}</p>
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
               onKeyDown={commentEnterSubmit}
               className={classNames(
                  'mb-2 rounded-lg border-2 border-solid border-[#5B41FF] p-3 outline-none ',
                  {
                     'border-red-700': errors.name,
                  }
               )}
               name="comment"
               cols="30"
               rows="10"
               placeholder="Комментарий"
            ></textarea>

            <button
               type="submit"
               className="rounded-xl bg-[#5B41FF] p-3 text-white transition-all hover:brightness-125"
            >
               ОСТАВИТЬ ЗАЯВКУ
            </button>
         </form>
      </div>
   );
};

export default ContactsForm;
