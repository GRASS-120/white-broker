import { NavLink } from 'react-router-dom';
import { headerData } from '../../../context/headerData';
import Button from '../../ui/Button';
import { useState } from 'react';

// надо как-то интегрировать добавление классов в navlink через tailwind

const Header = () => {
   let [open, setOpen]=useState(false)
   return (
      <div className="h-32 my-5 relative ">
         <div className='max-w-[1440px] m-auto container flex items-center justify-between '>
            <div className=''>
               <div className='text text-xl md:text-4xl'>
                  {headerData.title}
               </div>
               <nav className={`' w-screen justify-between md:flex-wrap lg:flex-nowrap flex flex-col md:items-center md:flex-row z-10 md:z-auto   md:static absolute bg-white left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  ${open ? 'left-0':'-left-[1000px]'}`}>
                 
                  {headerData.navbar.map(item => 
                     <NavLink key='{item}'
                        style={({isActive}) => ({
                           color: isActive ? '#3DA1DA' : '#111010',
                           margin: '10px',

                           })
                        }
                        to={item.href}
                        className={({ isActive, isPending }) =>
                           isPending ? 'pending' : isActive ? 'active' : ''
                        }
                        >
                        {item.text}
                     </NavLink> 
                     
                  )}
                  
                  <div className='text-xl  md:hidden lg:text-3xl items-center '>
                     <img className='m-1' src="telegram-b.png" alt="" />
                     <img className='m-1' src="whatsapp-b.png" alt="" />
                     {headerData.phoneNumber}
                     <div className=' text-xs  lg:text-xl mx-0 my-1'>
                        <Button>ЗАКАЗАТЬ ЗВОНОК</Button>
                     </div>
                  </div>

               </nav>
            </div>

            <div className='text-xl  hidden md:flex lg:text-4xl items-center '>
                  <img className='m-1' src="telegram-b.png" alt="" />
                  <img className='m-1' src="whatsapp-b.png" alt="" />
                  <div className='hidden text-3xl lg:block'>{headerData.phoneNumber}</div>
                  <div className=' text-xl mx-5'>
                     <Button>ЗАКАЗАТЬ ЗВОНОК</Button>
                  </div>
                  
                  </div>           
            <button class="text-3xl cursor-pointer mx-2 md:hidden block" name={open ? 'close': 'menu'} onClick={() => setOpen(!open)}>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            
         </button>
                  
         </div>
            

         <div className='h-1 w-screen absolute bottom-0 hidden bg-[#D9D9D9]'></div>
      </div>
   
      
   );
};


export default Header;
