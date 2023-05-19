import { useContext } from 'react';
import Form from '../components/Form/Form';
import Title from '../components/ui/Title';
import Context from '../context/context';
import { mainPageData } from '../context/mainPageData';

import { register } from 'swiper/element/bundle';
import Skills from '../components/common/skills/Skills';
import Button from '../components/ui/Button';
// register Swiper custom elements
register();

const MainPage = () => {
   const { banner } = useContext(Context);
   return (
      <div >
         <div>
         <swiper-container class='swiper-container' pagination='true' loop='true'>

            <swiper-slide  class='swiper-slide'>
               <div className='relative max-w-[1440px] m-auto'>
                  <div className='absolute  mt-5 lg:mt-32 max-w-[520px]'>
                     <Title >
                        {mainPageData.banner.title}
                     </Title>
                     <div className='my-5'>
                        {mainPageData.banner.subtitles.map(item =>
                           <p>{item}</p>
                        )}
                     </div>
                     <div className='flex items-baseline mb-5'>От <p className='mx-1 text-4xl font-bold'>{mainPageData.banner.percent}</p> годвых</div> 
                     <Button children={'ОСТАВИТЬ ЗАЯВКУ'}></Button>
                  </div>
               </div>
               <img src="bomj.jpeg" alt="" />
            </swiper-slide>

            <swiper-slide  class='swiper-slide'>
               <div className='relative max-w-[1440px] m-auto'>
                  <div className='absolute  mt-5 lg:mt-32 max-w-[520px]'>
                     <Title >
                        {mainPageData.banner.title}
                     </Title>
                     <div className='my-5'>
                        {mainPageData.banner.subtitles.map(item =>
                           <p>{item}</p>
                        )}
                     </div>
                     <div className='flex items-baseline mb-5'>От <p className='mx-1 text-4xl font-bold'>{mainPageData.banner.percent}</p> годвых</div> 
                     <Button children={'ОСТАВИТЬ ЗАЯВКУ'}></Button>
                  </div>
               </div>
               <img src="bomj_2.jpeg" alt="" />
            </swiper-slide>
            <swiper-slide class='swiper-slide'>Slide 3</swiper-slide>
         </swiper-container>
         
         {/* в данном случае index как key можно использовать */}
        

         </div>

         <Skills />
         
      </div>
   );
};

export default MainPage;
