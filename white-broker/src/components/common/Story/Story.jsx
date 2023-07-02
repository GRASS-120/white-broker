import React from 'react';
import { mainPageData } from '../../../context/mainPageData';
import Button from '../../ui/Button';

const Story = () => {
    return (
        <div className='bg-[#5B41FF]'>
            <div className='max-w-[1440px] m-auto flex flex-col sm:flex-row justify-center'>
                <img className='max-w-[380px] md:max-w-[420px] lg:max-w-none' src="phone.png" alt="" />
                <div className='my-10 mx-3'>
                    <p className='max-w-[560px] text-xl md:text-3xl lg:text-5xl font-bold text-white text-left mb-5 md:mb-20 '>{mainPageData.creditHistory.title}</p>
                    <a href='https://credistory.ru/credithistory'><button className='bg-[#fff] w-full md:w-5/6 md:text-xl lg:text-4xl font-semibold text-[#0276FF] p-3 rounded-xl transition-all hover:brightness-125 shadow-md'>{mainPageData.creditHistory.buttonText}</button></a>
                </div>
            </div>

        </div>
    )
}

export default Story