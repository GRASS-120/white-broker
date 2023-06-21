import React from "react";

const Help = () => {
    return (
        <div className="max-w-[1440px] m-auto my-28">
            <div className=" p-10 rounded-xl shadow-lg">
                <div className=" mb-3 font-semibold text-3xl">Нужна помощь ? </div>
                <div className="max-w-[900px] mb-8">STOLITSA FINANCE взаимодействуют со многими финансовыми структурами и компаниями: банками, страховыми, оценочными компаниями, агентствами недвижимости</div>
                <div className="flex flex-col lg:flex-row">
                    <input className="outline-none border-solid border-2 border-[#5B41FF] rounded-xl p-3 lg:mr-3 mb-2 lg:mb-0" type="text" placeholder="Ваше имя" />
                    <input className=" outline-none border-solid border-2 border-[#5B41FF] rounded-xl p-3 lg:mr-3 mb-2 lg:mb-0" type="phone" placeholder="+7 (999) 999-99-99"/>
                    <input className="outline-none border-solid border-2 border-[#5B41FF] rounded-xl p-3 lg:mr-3 mb-2 lg:mb-0" type="number" placeholder="Сумма от 500 000 руб" />
                    <button className='bg-[#5B41FF] p-3 rounded-xl text-white transition-all hover:brightness-125'>ОСТАВИТЬ ЗАЯВКУ</button>
                </div>
            </div>
            
        </div>
    )
}

export default Help;