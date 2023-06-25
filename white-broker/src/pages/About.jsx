const About = () => {
   return (
      <div className="m-auto my-10 max-w-[1440px]">
         <div className="relative mb-24 mt-7 flex flex-wrap justify-center text-3xl lg:justify-between">
            <div className="max-w-[650px]">
               <div className="mb-6 font-bold">
                  Белый брокер рад приветствовать вас на сайте
               </div>
               <div className="mb-6">
                  Белый брокер – это консалтинговая компания, которая
                  специализируется на привлечении и содействии финансирования
                  для Бизнеса и собственников Бизнеса.
               </div>
               <img src="Arrow-r.png" alt="" />
            </div>
            <img src="deal.png" alt="" />
            <img
               className="absolute right-[-40px] top-[-40px]"
               src="Rectangle_45.png"
               alt=""
            />
            <img
               className="absolute right-[-40px] top-[-40px]"
               src="Rectangle_46.png"
               alt=""
            />
         </div>
         <div className="relative mb-24 flex flex-wrap justify-center text-3xl lg:justify-between">
            <img className="hidden lg:block" src="success.png" alt="" />
            <div className="max-w-[650px] lg:max-w-[500px]">
               Наши основные направления: содействие в получении кредита на
               бизнес, кредита под госконтракт, кредита под залог недвижимости,
               потребительского кредита, банковской гарантии, факторинга,
               лизинга.
            </div>
            <img
               className="absolute bottom-[-50px] left-[-50px]"
               src="Ellipse_6.png"
               alt=""
            />
         </div>
         <div className="mb-24 flex flex-wrap justify-center text-3xl lg:justify-between">
            <div className="mb-6 max-w-[650px]">
               Мы создаём комфортные условия ведения бизнеса нашим клиентам и
               партнерам, используем индивидуальный подход и предлагаем наиболее
               выгодные условия, исходя из реальной ситуации.
            </div>
            <img src="circle.png" alt="" />
         </div>

         <div className="m-auto flex flex-col justify-center text-2xl lg:flex-row lg:justify-between  ">
            <div className="p-6 lg:max-w-[500px]">
               <div className="mb-6 text-3xl font-bold">
                  0.7% - ниже ставка по кредитам
               </div>
               <div className="mb-6">
                  годовая ставка для клиентов «Белый брокер» ниже, в среднем, на
                  0,9%, а риски переплаты минимизированы или исключены.
                  Обратиться в «Белый брокер» выгоднее, чем напрямую в банк.
               </div>
            </div>

            <div className="p-6 lg:max-w-[500px]">
               <div className="mb-6 text-3xl font-bold">Без предоплаты</div>
               <div className="mb-6">
                  Соглашаясь на сотрудничество, мы уверены в успехе настолько,
                  что не берем предоплат – все необходимые для хода сделки
                  процедуры оплачивает Белый брокер.
               </div>
            </div>
         </div>

         <button className="ml-3 rounded-xl bg-[#5B41FF] p-6 text-3xl text-white transition-all hover:brightness-125">
            ОСТАВИТЬ ЗАЯВКУ
         </button>
      </div>
   );
};

export default About;
