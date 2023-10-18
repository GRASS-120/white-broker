import ContactsForm from '../components/common/Forms/ContactsForm';

const Contacts = () => {
   return (
      <div className="mt-24">
         <div className="m-auto flex max-w-[1440px] flex-col justify-around md:flex-row">
            <div className="ml-3">
               {/* <div className="my-10">
                  <div className=" text-4xl font-bold">
                     Кредитный <p>Белый Брокер</p>
                  </div>
               </div> */}
               <div className="mb-10 ml-3 mt-10 flex flex-col justify-between lg:flex-row">
                  <div>
                     <div className="mb-10 text-4xl font-bold">
                        Свяжитесь с <p>нами</p>
                     </div>
                     <div>
                        <li className="mb-3 flex list-none items-center text-2xl font-semibold">
                           <img className="mr-3" src="call.png" alt="" />
                           +7 (952) 155 5748
                        </li>
                        {/* <li className="mb-3 flex list-none items-center text-2xl font-semibold">
                           <img className="mr-3" src="email.png" alt="" />
                           whiteBroker@mail.ru
                        </li> */}
                        {/* <li className="mb-3 flex list-none items-center text-2xl font-semibold">
                           <img className="mr-3" src="time.png" alt="" />
                           Пн - Пт с 9:00 до 20:00
                        </li> */}
                     </div>
                     {/* <div className="mb-10">
                        Соц. сети
                        <div className="flex">
                           <img className="mr-3" src="telegram-b.png" alt="" />
                           <img src="whatsapp-b.png" alt="" />
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
            <ContactsForm />
         </div>
      </div>
   );
};

export default Contacts;
