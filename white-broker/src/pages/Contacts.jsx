import ContactsForm from '../components/common/Forms/ContactsForm';

const Contacts = () => {
   return (
      <div className='mt-24'>
         <div className="m-auto max-w-[1440px] flex flex-col md:flex-row justify-around">
            <div className='ml-3'>
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
            </div>

               
            </div>
            <ContactsForm />
         </div>
      </div>
   );
};

export default Contacts;
