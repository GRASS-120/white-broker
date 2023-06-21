import React from 'react';
import Button from '../../ui/Button';

const ProductItem = ({text}) => {
    return (
        <div className=' mx-2 p-5 text-xs sm:text-base relative hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] my-6 transition-all max-w-[370px] sm:h-[370px] min-h-[390px] rounded-xl bg-gradient-to-tr from-[#BD00FF] to-[#0276FF] text-white'>
            <div className=' font-bold text-base sm:text-xl'>{text.title}</div>
            <div className=' text-[14px] my-5'>{text.text}</div>
            <div>
                <div className='flex w-3/4 justify-between sm:items-center flex-col sm:flex-row absolute bottom-16'>
                    <div>
                        <div className='font-bold text-xl  sm:text-2xl'>{text.percent.percent}</div>
                        <p className=' sm:text-[14px] max-w-[100px]'>минимальная ставка</p>
                    </div>
                    <div className='my-3'>
                        <div className='font-bold  text-xl sm:text-2xl'>{text.percent.sum}</div>
                        <p className=' sm:text-[14px] max-w-[100px]'>Максимальная сумма</p>
                    </div>
                </div>

                    <button className='w-[180px] sm:w-full sm:max-w-[330px] bg-[#fff] text-[#0276FF] font-bold p-2 rounded-xl absolute bottom-5 transition-all hover:brightness-125'>ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
        </div>
    )
}

export default ProductItem