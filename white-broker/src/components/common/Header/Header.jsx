import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { headerData } from '../../../context/headerData';
import Button from '../../ui/Button';
import Modal from '../ModalForm/Modal';
import ModalForm from '../ModalForm/ModalForm';

const Header = () => {
   let [open, setOpen] = useState(false);
   const [isOpened, setIsOpened] = useState(false);

   return (
      <div className="fixed z-20 h-16 w-full  bg-white py-1 lg:h-24">
         <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
            <ModalForm setIsOpened={setIsOpened} />
         </Modal>
         <div className=" container m-auto  flex max-w-[1440px] items-center justify-between p-2 ">
            <div className="">
               <div className="text mx-4 text-xl md:mx-0 md:text-4xl">
                  {headerData.title}
               </div>
               <nav
                  className={`' absolute z-50 flex text-lg font-semibold lg:font-medium w-screen flex-col justify-between rounded-b-xl bg-white py-4 pl-7 transition-all lg:static  lg:z-50 lg:w-auto lg:flex-row  lg:flex-wrap lg:items-center lg:py-0 lg:pl-0 lg:opacity-100   ${
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
                  <div className="z-40 items-center text-xl lg:hidden lg:text-3xl ">
                     <div className="flex">
                        <img className="m-1 w-[35px]" src="telegram.svg" alt="" />
                        <img className="m-1 w-[35px]" src="whatsapp.svg" alt="" />
                     </div>

                     <p className="my-3">{headerData.phoneNumber}</p>
                     <div className=" mx-0  my-1 text-xs lg:text-xl">
                        <Button
                           onClick={() => setIsOpened(true)}
                           children={'ЗАКАЗАТЬ ЗВОНОК'}
                        ></Button>
                     </div>
                  </div>
               </nav>
            </div>

            {/* Меню на десктоп */}
            <div className="z-40 hidden items-center text-xl lg:flex lg:text-4xl">
                  <img className="m-1 w-[35px]" src="telegram.svg" alt="" />
                  <img className="m-1 w-[35px]" src="whatsapp.svg" alt="" />
               <div className="hidden text-3xl xl:block">
                  {headerData.phoneNumber}
               </div>
               <div className=" mx-5 text-xl">
                  <Button onClick={() => setIsOpened(true)}>
                     ЗАКАЗАТЬ ЗВОНОК
                  </Button>
               </div>
            </div>
            <button
               className="mx-4 mt-2 block cursor-pointer text-3xl lg:hidden "
               name={open ? 'close ' : 'menu'}
               onClick={() => setOpen(!open)}
            >
               <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </button>
         </div>

         <div className="absolute -bottom-1 h-1 w-full bg-[#D9D9D9]"></div>
         <div
            className={`'absolute z-10' h-[10000px] w-screen bg-black opacity-40 lg:hidden ${
               open ? 'block' : 'hidden'
            }  `}
         ></div>
      </div>
   );
};

export default Header;
