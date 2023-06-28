import { mainPageData } from '../../../context/mainPageData';
import ProductItem from './ProductItem';

const Product = () => {
   return (
      <div className=" my-12">
         <div className=" text-center text-4xl font-bold">
            {mainPageData.offers.title}
         </div>
         <p className=" my-4 text-center text-xl">
            {mainPageData.offers.subtitle}
         </p>

         <div className="m-auto flex max-w-[1440px] flex-wrap justify-around bg-white">
            {mainPageData.offers.list.map((item, index) => (
               <ProductItem key={'product_' + index} text={item} />
            ))}
         </div>
      </div>
   );
};

export default Product;
