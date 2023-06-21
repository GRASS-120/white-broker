const Contacts = () => {
   return (
   <div>
      <div className="max-w-[1440px] m-auto">
         <div className="my-10">
            <div className=" font-bold text-4xl">Кредитный <p>Белый Брокер</p></div>
            <div className="text-[#5B41FF]">инн 77777777777777</div>
         </div>
         <div className="flex justify-between flex-col lg:flex-row ml-3 mb-10">
            <div>
               <div className="font-bold text-4xl mb-10">Свяжитесь с <p>нами</p></div>
               <div>
                  <li className="list-none flex font-semibold text-2xl mb-3 items-center"><img className="mr-3" src="call.png" alt="" />+7 (999) 999-99-99</li>
                  <li className="list-none flex font-semibold text-2xl mb-3 items-center"><img className="mr-3" src="email.png" alt="" />whiteBroker@mail.ru</li>
                  <li className="list-none flex font-semibold text-2xl mb-3 items-center"><img className="mr-3" src="geo.png" alt="" />г. Томск ул. такая-то, д. такой-то</li>
                  <li className="list-none flex font-semibold text-2xl mb-3 items-center"><img className="mr-3" src="time.png" alt="" />Пн - Пт с 9:00 до 20:00</li>
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
               <div className=" text-2xl mb-1">Форма обратной связи</div>
               <p className="mb-3">Вы можете оставить ваши данные и интересующий вас вопрос</p>
               <div className="flex flex-col">
                  <input className="outline-none border-solid border-2 border-[#5B41FF] rounded-lg p-3 mb-1" type="text" placeholder="Ваше имя" />
                  <input className="outline-none border-solid border-2 border-[#5B41FF] rounded-lg p-3 mb-1" type="number" placeholder="+7 (999) 999-99-99"/>
                  <textarea className="outline-none border-solid border-2 border-[#5B41FF] rounded-lg p-3 mb-1" name="" id="" cols="30" rows="10" placeholder="коммент"></textarea>
                  <button className='bg-[#5B41FF] p-3 rounded-xl text-white transition-all hover:brightness-125'>ОСТАВИТЬ ЗАЯВКУ</button>
               </div>
            </div>
         </div>

      </div>
      
   </div>
   )
};

export default Contacts;
