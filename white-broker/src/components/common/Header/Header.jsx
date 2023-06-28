import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { headerData } from '../../../context/headerData';
import Button from '../../ui/Button';

// надо как-то интегрировать добавление классов в navlink через tailwind

const Header = () => {
   let [open, setOpen] = useState(false);
   return (
      <div className="fixed py-1 h-16 lg:h-24  w-full z-20 bg-white">
         
         <div className=" p-2 container  m-auto flex max-w-[1440px] items-center justify-between ">
            <div className="">
               <div className="text text-xl md:text-4xl mx-4 md:mx-0">
                  {headerData.title}
               </div>
               <nav
                  className={`' absolute  z-50  flex w-screen flex-col justify-between bg-white py-4 transition-all lg:static pl-7  lg:z-50 lg:w-auto lg:flex-row  lg:flex-wrap lg:items-center lg:py-0 lg:pl-0 lg:opacity-100   ${
                     open ? 'left-0' : 'left-[-1000px]'
                  }`}
               >
                  {headerData.navbar.map((item, id) => (
                     <NavLink
                        key={id}
                        style={({ isActive }) => ({
                           color: isActive ? '#3DA1DA' : '',
                           ':hover': { color: 'green' },
                           margin: '10px',
                        })}
                        onClick={() => setOpen(!open)}
                        to={item.href}
                        className={({ isActive, isPending }) =>
                           isPending ? 'pending' : isActive ? 'active' : ''
                        }
                     >
                        {item.text}
                     </NavLink>
                  ))}
                  
                         {/* Меню на мобилках */}
                  <div className="items-center z-40 text-xl lg:hidden lg:text-3xl ">
                     <div className='flex'>
                        <img className="m-1" src="telegram-b.png" alt="" />
                        <img className="m-1" src="whatsapp-b.png" alt="" />
                     </div>

                     <p className='my-3'>{headerData.phoneNumber}</p>
                     <div className=" mx-0  my-1 text-xs lg:text-xl">
                        <Button children={'ЗАКАЗАТЬ ЗВОНОК'}></Button>
                     </div>
                  </div>
               </nav>
            </div>

                        {/* Меню на десктоп */}
            <div className="hidden z-40 items-center text-xl lg:flex lg:text-4xl">
                  <img className="m-1" src="telegram-b.png" alt="" />
                  <img className="m-1" src="whatsapp-b.png" alt="" />
               <div className="hidden text-3xl xl:block">
                  {headerData.phoneNumber}
               </div>
               <div className=" mx-5 text-xl">
                  <Button>ЗАКАЗАТЬ ЗВОНОК</Button>
               </div>
            </div>
            <button
               
               className="mt-2 mx-4 block cursor-pointer text-3xl lg:hidden "
               name={open ? 'close ' : 'menu'}
               onClick={() => setOpen(!open)
               }
            >
               <ion-icon  name={open ? 'close' : 'menu'}></ion-icon>
            </button>
         </div>

         <div className="absolute -bottom-1 h-1 w-full bg-[#D9D9D9]"></div>
         <div className={`'absolute w-screen h-[10000px] lg:hidden bg-black opacity-40 z-10' ${ open ? 'block' : 'hidden'}  `}></div>
      </div>
      
   );
};

export default Header;
