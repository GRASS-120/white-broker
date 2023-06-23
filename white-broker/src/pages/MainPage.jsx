import { useContext } from 'react';
import Title from '../components/ui/Title';
import Context from '../context/context';
import { mainPageData } from '../context/mainPageData';

import { register } from 'swiper/element/bundle';
import Calc from '../components/common/Calc/Calc';
import Product from '../components/common/Product/Product';
import Story from '../components/common/Story/Story';
import Skills from '../components/common/skills/Skills';
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
                  <span className=' absolute  z-20  h-screen w-screen bg-black opacity-30 content-[""]'></span>
                  <div className="relative z-30 m-auto max-w-[1440px]">
                     <div className="absolute mx-3 mt-5 max-w-[520px] lg:mt-32">
                        <Title>{mainPageData.banner.title}</Title>
                        <div className="my-5">
                           {mainPageData.banner.subtitles.map((item, index) => (
                              <p key={'banner_sub1_' + index}>{item}</p>
                           ))}
                        </div>
                        <div className="mb-5 flex items-baseline">
                           От{' '}
                           <p className="mx-1 text-4xl font-bold">
                              {mainPageData.banner.percent}
                           </p>{' '}
                           годвых
                        </div>
                        <button className="rounded-xl bg-[#5B41FF] p-3 transition-all hover:brightness-125">
                           ОСТАВИТЬ ЗАЯВКУ
                        </button>
                     </div>
                  </div>
                  <img
                     className="h-screen w-screen object-cover"
                     src="bomj.jpeg"
                     alt=""
                  />
               </swiper-slide>

               <swiper-slide class="swiper-slide">
                  <span className=' absolute  z-20  h-screen w-screen bg-black opacity-30 content-[""]'></span>
                  <div className="relative z-30 m-auto max-w-[1440px]">
                     <div className="absolute  mt-5 max-w-[520px] lg:mt-32">
                        <Title>{mainPageData.banner.title}</Title>
                        <div className="my-5">
                           {mainPageData.banner.subtitles.map((item, index) => (
                              <p key={'banner_sub_' + index}>{item}</p>
                           ))}
                        </div>
                        <div className="mb-5 flex items-baseline">
                           От{' '}
                           <p className="mx-1 text-4xl font-bold">
                              {mainPageData.banner.percent}
                           </p>{' '}
                           годвых
                        </div>
                        <button className="rounded-xl bg-[#5B41FF] p-3  transition-all hover:brightness-125">
                           ОСТАВИТЬ ЗАЯВКУ
                        </button>
                     </div>
                  </div>
                  <img
                     className="h-screen object-cover "
                     src="bomj_2.jpeg"
                     alt=""
                  />
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
