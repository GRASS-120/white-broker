import { NavLink } from 'react-router-dom';
import { headerData } from '../../../context/headerData';
import Button from '../../ui/Button';
import { useState } from 'react';

// надо как-то интегрировать добавление классов в navlink через tailwind

const Header = () => {
   let [open, setOpen]=useState(false)
   return (
      <div className="h-9 md:h-24 my-5 relative ">
         <div className='max-w-[1440px] m-auto container flex items-center justify-between '>
            <div className=''>
               <div className='text text-xl md:text-4xl'>
                  {headerData.title}
               </div>
               <nav  className={`' w-screen justify-between md:flex-wrap  mt-5 transition-all lg:flex-nowrap flex flex-col md:items-center md:flex-row z-10 md:z-auto   md:static absolute bg-white  md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  ${open ? 'left-0':'-left-[1000px]'}`}>
                 
                  {headerData.navbar.map( (item, id) => 
                     <NavLink key={id}
                        style={({isActive}) => ({
                           color: isActive ? '#3DA1DA' : '',
                           ":hover": { color: "green" },
                           margin: '10px',
                           })
                        }
                        onClick={() => setOpen(!open)}
                        to={item.href}
                        className={({ isActive, isPending}) =>
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
                        <Button children={'ЗАКАЗАТЬ ЗВОНОК'}></Button>
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
            

         <div className='h-1 w-full absolute -bottom-5 bg-[#D9D9D9]'></div>
      </div>
   
      
   );
};


export default Header;
