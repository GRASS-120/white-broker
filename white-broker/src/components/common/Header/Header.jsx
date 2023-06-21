import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { headerData } from '../../../context/headerData';
import Button from '../../ui/Button';

// надо как-то интегрировать добавление классов в navlink через tailwind

const Header = () => {
   let [open, setOpen] = useState(false);
   return (
      <div className="relative my-5 h-9 md:h-24 ">
         <div className="container m-auto flex max-w-[1440px] items-center justify-between ">
            <div className="">
               <div className="text text-xl md:text-4xl">
                  {headerData.title}
               </div>
               <nav
                  className={`' absolute z-10 mt-5  flex w-screen flex-col justify-between bg-white py-4 pl-7 transition-all md:static   md:z-auto md:w-auto md:flex-row  md:flex-wrap md:items-center md:py-0 md:pl-0 md:opacity-100 lg:flex-nowrap  ${
                     open ? 'left-0' : '-left-[1000px]'
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

                  <div className="items-center  text-xl md:hidden lg:text-3xl ">
                     <img className="m-1" src="telegram-b.png" alt="" />
                     <img className="m-1" src="whatsapp-b.png" alt="" />
                     {headerData.phoneNumber}
                     <div className=" mx-0  my-1 text-xs lg:text-xl">
                        <Button children={'ЗАКАЗАТЬ ЗВОНОК'}></Button>
                     </div>
                  </div>
               </nav>
            </div>

            <div className="hidden  items-center text-xl md:flex lg:text-4xl ">
               <img className="m-1" src="telegram-b.png" alt="" />
               <img className="m-1" src="whatsapp-b.png" alt="" />
               <div className="hidden text-3xl lg:block">
                  {headerData.phoneNumber}
               </div>
               <div className=" mx-5 text-xl">
                  <Button>ЗАКАЗАТЬ ЗВОНОК</Button>
               </div>
            </div>
            <button
               className="mx-2 block cursor-pointer text-3xl md:hidden"
               name={open ? 'close' : 'menu'}
               onClick={() => setOpen(!open)}
            >
               <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </button>
         </div>

         <div className="absolute -bottom-5 h-1 w-full bg-[#D9D9D9]"></div>
      </div>
   );
};

export default Header;
