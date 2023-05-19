import React from 'react';
import { mainPageData } from '../../../context/mainPageData';
import Button from '../../ui/Button';


const Calc = () => {
    return (
        <div className='my-10'>
            <div className='max-w-[1440px] m-auto'>
                <div className='text-4xl font-bold text-center'>{mainPageData.calculator.title}</div>
                <p className='text-xl text-center my-4'>{mainPageData.calculator.subtitle}</p>

                <div className='flex flex-col md:flex-row justify-center mx-3'>
                    <div className='max-w-[650px]'>
                        <select>
                            <option value="someOption">{mainPageData.calculator.creditPresets[0].name}</option>
                            <option value="someOption">{mainPageData.calculator.creditPresets[1].name}</option>
                            <option value="someOption">{mainPageData.calculator.creditPresets[2].name}</option>
                            <option value="someOption">{mainPageData.calculator.creditPresets[3].name}</option>
                            <option value="someOption">{mainPageData.calculator.creditPresets[4].name}</option>
                            <option value="someOption">{mainPageData.calculator.creditPresets[5].name}</option>
                            <option value="someOption">{mainPageData.calculator.creditPresets[6].name}</option>
                            <option value="someOption">{mainPageData.calculator.creditPresets[7].name}</option>
                            <option value="someOption">{mainPageData.calculator.creditPresets[8].name}</option>
                            <option value="someOption">{mainPageData.calculator.creditPresets[9].name}</option>
                            <option value="someOption">{mainPageData.calculator.creditPresets[10].name}</option>
                            <option value="someOption">{mainPageData.calculator.creditPresets[11].name}</option>
                            <option value="someOption">{mainPageData.calculator.creditPresets[12].name}</option>
                            <option value="someOption">{mainPageData.calculator.creditPresets[13].name}</option>
                        </select>
                        <div>
                            <div>
                                <div className='flex justify-between'>
                                    <p>Сумма кредита</p>
                                    <p>5 000 000</p>
                                </div>
                                <div className='w-full h-4 bg-[#0276FF]'>

                                </div>
                                <div className='flex justify-between'>
                                    <p>1р</p>
                                    <p>30 000 000</p>
                                </div>
                            </div>

                            <div>
                                <div className='flex justify-between'>
                                    <p>Срок кредита</p>
                                    <p>1 месяц</p>
                                </div>
                                <div className='w-full h-4 bg-[#0276FF]'>

                                </div>
                                <div className='flex justify-between'>
                                    <p>1р</p>
                                    <p>60 месяцев</p>
                                </div>
                            </div>
                            <Button children={'ОСТАВИТЬ ЗАЯВКУ'}></Button>
                        </div>
                    </div>


                    <div className='rounded-xl border-2 border-solid border-[#5B41FF] p-5'>
                        <p>Подберите подходящие вам условия</p>

                        <div>Экспресс кредит</div>
                        <div className='flex'>
                            <p>Cумма - 5 000 000 р</p>
                            <p>Срок - 12 месяцев</p>
                        </div>
                        <div>
                            <div>
                                <p>10%</p>
                                <p>процентная ставка</p>
                            </div>
                            <div>
                                <p>439 579 р</p>
                                <p>Ежемесячный платеж</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calc