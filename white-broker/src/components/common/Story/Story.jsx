import React from 'react';
import { mainPageData } from '../../../context/mainPageData';
import Button from '../../ui/Button';

const Story = () => {
    return (
        <div className='bg-[#5B41FF]'>
            <div className='max-w-[1440px] m-auto flex flex-col sm:flex-row justify-center'>
                <img className='max-w-[380px] md:max-w-[420px] lg:max-w-none' src="phone.png" alt="" />
                <div className='my-10 mx-3'>
                    <p className='text-xl md:text-3xl lg:text-5xl font-bold text-white text-left '>{mainPageData.creditHistory.title}</p>
                    <Button children={mainPageData.creditHistory.buttonText}></Button>
                </div>
            </div>

        </div>
    )
}

export default Story