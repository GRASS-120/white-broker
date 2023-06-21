import { NavLink } from 'react-router-dom';
import { footerData } from '../../../context/footerData';
import { headerData } from '../../../context/headerData';

const Footer = () => {
   return (
      <div className="mt-auto w-full  bg-slate-600  p-10 text-white">
         <div className="m-auto max-w-[1440px] flex-col justify-around text-xs md:flex-row lg:flex  lg:text-base">
            <div className="max-w-[390px]">
               <div className="semi-bold my-5 text-xl">
                  {footerData.about.title}
               </div>
               <div>{footerData.about.text}</div>
            </div>
            <div className="flex max-w-[390px] flex-col">
               <div className="semi-bold my-5 text-xl">Меню</div>
               {headerData.navbar.map((item, index) => (
                  <NavLink
                     key={'footer_nav_' + index}
                     style={({ isActive }) => ({
                        color: 'white',
                        margin: '5px 0 5px 0',
                     })}
                     to={item.href}
                     className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''
                     }
                  >
                     {item.text}
                  </NavLink>
               ))}
            </div>
            <div className="max-w-[390px]">
               <div className="semi-bold my-5 text-xl">Соц. сети</div>
               <div className="flex">
                  <img className="mx-1" src="telegram.png" alt="" />
                  <img className="mx-1" src="whatsapp 1.png" alt="" />
               </div>
            </div>
            <div className="max-w-[390px]">
               <div className="semi-bold my-5 text-xl">
                  {footerData.contacts.title}
               </div>
               <div>
                  {footerData.contacts.info.map((item, index) => (
                     <div className="flex" key={'footer_contacts_' + index}>
                        <div className="mr-1">{item.title}</div>
                        <div>{item.value}</div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
