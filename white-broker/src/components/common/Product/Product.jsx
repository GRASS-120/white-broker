import React from 'react';
import { mainPageData } from '../../../context/mainPageData';
import Button from '../../ui/Button';
import ProductItem from './ProductItem';

const Product = () => {
    return (
        <div className=' my-24'> 
            <div className=' text-4xl font-bold text-center'>{mainPageData.offers.title}</div>
            <p className=' text-xl text-center my-4'>{mainPageData.offers.subtitle}</p>

            <div className='max-w-[1440px] m-auto bg-white flex flex-wrap justify-around'>
                <ProductItem text={mainPageData.offers.list[0]}/>
                <ProductItem text={mainPageData.offers.list[1]}/>
                <ProductItem text={mainPageData.offers.list[2]}/>
                <ProductItem text={mainPageData.offers.list[3]}/>
                <ProductItem text={mainPageData.offers.list[4]}/>
                <ProductItem text={mainPageData.offers.list[5]}/>
            </div>
        </div>
    )
}

export default Product