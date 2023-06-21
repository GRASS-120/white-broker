import { useContext } from 'react';
import Title from '../components/ui/Title';
import Context from '../context/context';
import { mainPageData } from '../context/mainPageData';

import { register } from 'swiper/element/bundle';
import Skills from '../components/common/skills/Skills';
import Button from '../components/ui/Button';
import Product from '../components/common/Product/Product';
import Calc from '../components/common/Calc/Calc';
import Story from '../components/common/Story/Story';
// register Swiper custom elements
register();

const MainPage = () => {
   const { banner } = useContext(Context);
   return (
      <div>
         <div>
            <swiper-container
               class="swiper-container"
               pagination="true"
               loop="true"
               autoplay="true"
            >
               <swiper-slide class="swiper-slide">
                  <span className=' content-[""]  absolute  opacity-30 bg-black w-screen h-screen z-20'></span>
                  <div className="relative m-auto max-w-[1440px] z-30">
                     <div className="absolute mx-3 mt-5 max-w-[520px] lg:mt-32">
                        <Title>{mainPageData.banner.title}</Title>
                        <div className="my-5">
                           {mainPageData.banner.subtitles.map((item) => (
                              <p>{item}</p>
                           ))}
                        </div>
                        <div className="mb-5 flex items-baseline">
                           От{' '}
                           <p className="mx-1 text-4xl font-bold">
                              {mainPageData.banner.percent}
                           </p>{' '}
                           годвых
                        </div>
                        <button className='bg-[#5B41FF] p-3 rounded-xl transition-all hover:brightness-125'>ОСТАВИТЬ ЗАЯВКУ</button>
                     </div>
                  </div>
                  <img className='object-cover w-screen h-screen' src="bomj.jpeg" alt="" />
                  
               </swiper-slide>

               <swiper-slide class="swiper-slide">
               <span className=' content-[""]  absolute  opacity-30 bg-black w-screen h-screen z-20'></span>
                  <div className="relative m-auto max-w-[1440px] z-30">
                     <div className="absolute  mt-5 max-w-[520px] lg:mt-32">
                        <Title>{mainPageData.banner.title}</Title>
                        <div className="my-5">
                           {mainPageData.banner.subtitles.map((item) => (
                              <p>{item}</p>
                           ))}
                        </div>
                        <div className="mb-5 flex items-baseline">
                           От{' '}
                           <p className="mx-1 text-4xl font-bold">
                              {mainPageData.banner.percent}
                           </p>{' '}
                           годвых
                        </div>
                        <button className='bg-[#5B41FF] p-3 rounded-xl  transition-all hover:brightness-125'>ОСТАВИТЬ ЗАЯВКУ</button>
                     </div>
                  </div>
                  <img className='object-cover h-screen ' src="bomj_2.jpeg" alt="" />
               </swiper-slide>
               <swiper-slide class="swiper-slide">Slide 3</swiper-slide>
            </swiper-container>

            {/* в данном случае index как key можно использовать */}
         </div>


         <Skills />
         <Calc />     
         <Product />
         <Story />
      </div>
   );
};

export default MainPage;
