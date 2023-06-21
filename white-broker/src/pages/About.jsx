import React from "react";

const About = () => {
    return (
        <div className="max-w-[1440px] m-auto my-10">
            <div className="flex flex-wrap justify-center lg:justify-between text-3xl mt-7 mb-24 relative">
                    <div className="max-w-[650px]">
                        <div className="font-bold mb-6">Белый брокер рад приветствовать вас на сайте</div>
                        <div className="mb-6">Белый брокер – это консалтинговая компания, которая специализируется на привлечении и содействии финансирования для Бизнеса и собственников Бизнеса.</div>
                        <img src="Arrow-r.png" alt="" />
                    </div>
                    <img src="deal.png" alt="" />
                    <img className="absolute right-[-40px] top-[-40px]" src="Rectangle_45.png" alt="" />
                    <img className="absolute right-[-40px] top-[-40px]" src="Rectangle_46.png" alt="" />

            </div>
            <div className="flex flex-wrap justify-center lg:justify-between text-3xl mb-24 relative">
           
                    <img className="hidden lg:block" src="success.png" alt="" />
                    <div className="max-w-[650px] lg:max-w-[500px]">
                        Наши основные направления: содействие в получении кредита на бизнес, кредита под госконтракт, кредита под залог недвижимости, потребительского кредита, банковской гарантии, факторинга, лизинга.
                    </div>  
                    <img className="absolute left-[-50px] bottom-[-50px]" src="Ellipse_6.png" alt="" />

            </div>
            <div className="flex flex-wrap justify-center lg:justify-between text-3xl mb-24">
                    <div className="max-w-[650px] mb-6">
                    Мы создаём комфортные условия ведения бизнеса нашим клиентам и партнерам, используем индивидуальный подход и предлагаем наиболее выгодные условия, исходя из реальной ситуации.
                    </div>   
                    <img src="circle.png" alt="" />
            </div>
            
            <div className="flex justify-center m-auto lg:justify-between text-2xl flex-col lg:flex-row  ">
                <div className="lg:max-w-[500px] p-6">
                    <div className="font-bold text-3xl mb-6">0.7% - ниже ставка по кредитам</div>
                    <div className="mb-6">годовая ставка для клиентов «Белый брокер» ниже, в среднем, на 0,9%, а риски переплаты минимизированы или исключены. Обратиться в «Белый брокер» выгоднее, чем напрямую в банк.</div>
                </div>

                <div className="lg:max-w-[500px] p-6">
                    <div className="font-bold text-3xl mb-6">Без предоплаты</div>
                    <div className="mb-6">Соглашаясь на сотрудничество, мы уверены в успехе настолько, что не берем предоплат – все необходимые для хода сделки процедуры оплачивает Белый брокер.</div>
                </div>    
            </div>


            <button className='bg-[#5B41FF] p-6 rounded-xl text-white text-3xl transition-all hover:brightness-125 ml-3'>ОСТАВИТЬ ЗАЯВКУ</button>
            

        </div>
    )
}

export default About;