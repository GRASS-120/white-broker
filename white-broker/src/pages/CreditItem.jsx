import React from "react";
import PurpleBlocks from "../components/common/PurpleBlocks/PurpleBlocks";
import Help from "../components/common/Help/Help";
import SkillsDark from "../components/common/Skills/SkillsDark";
import Product from "../components/common/Product/Product";

const CreditItem = () => {
    return (
        <div>
            <div className="max-w-[1440px] m-auto text-white my-10">
                <div className='bg-gradient-to-tr from-[#BD00FF] to-[#0276FF] p-8 rounded-xl'>
                    <div className="mb-3">
                        <div className=" text-5xl font-bold mb-3">КРЕДИТ ДЛЯ РАЗВИТИЯ БИЗНЕСА</div>
                        <div>
                            <li>до 3 000 000 000 Р</li>
                            <li>Решение от 3-х дней</li>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
                        <div className="flex flex-col lg:max-w-2xl">
                            <div>
                                <p className="mb-5">Нужен кредит для развития бизнеса? Возьмите через компанию БЕЛЫЙ БРОКЕР быстрое оформление, лояльный подход к кредитной истории</p>
                            </div>
                            <div className=" bg-white rounded-xl  flex flex-col  py-6 px-10">
                                <input className="outline-none border-solid border-2 border-[#5B41FF] rounded-lg p-3 mb-1" type="text" placeholder="Ваше имя" />
                                <input className="outline-none border-solid border-2 border-[#5B41FF] rounded-lg p-3 mb-1" type="text" placeholder="+7 (999) 999-99-99" />
                                <input className="outline-none border-solid border-2 border-[#5B41FF] rounded-lg p-3 mb-1" type="text" placeholder="Сумма от 500 000 руб" />
                                <button className='bg-[#5B41FF] p-3 rounded-xl text-white transition-all hover:brightness-125'>ОСТАВИТЬ ЗАЯВКУ</button>
                                <div className="text-[#5B41FF] text-xs">
                                <input type="checkbox" className="mr-3 " />Отправляя заявку вы принимаете условия обработки персональных данных
                                </div>

                            </div>
                        </div>
                        <div>
                            <img className="hidden lg:block" src="meeting.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <PurpleBlocks />
            <SkillsDark />
            <Help />
            <Product />
        </div>
    )
}

export default CreditItem;