import { NavLink } from "react-router-dom";
import { footerData } from "../../../context/footerData";
import { headerData } from '../../../context/headerData';

const Footer = () => {
   return (
      <div className="mt-auto w-full  bg-slate-600  text-white p-10">
         <div className="max-w-[1440px] m-auto text-xs lg:text-base justify-around flex-col md:flex-row  lg:flex">
            <div className="max-w-[390px]">
               <div className="semi-bold text-xl my-5">{footerData.about.title}</div>
               <div>{footerData.about.text}</div>
            </div>
            <div className="max-w-[390px] flex flex-col">
            <div className="semi-bold text-xl my-5">Меню</div>
            {headerData.navbar.map(item => 
                     <NavLink key='{item}'
                        style={({isActive}) => ({
                           color: 'white',
                           margin: '5px 0 5px 0'

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
            </div>
            <div className="max-w-[390px]">
                  <div className="semi-bold text-xl my-5">Соц. сети</div>
                  <div className="flex">
                     <img className="mx-1" src="telegram.png" alt="" />
                     <img className="mx-1" src="whatsapp 1.png" alt="" />
                  </div>
               </div>
               <div className="max-w-[390px]">
                  <div className="semi-bold text-xl my-5">{footerData.contacts.title}</div>
                  <div>
                  {footerData.contacts.info.map(item=> 
                     <div className="flex">
                        <div className="mr-1">{item.title}</div>
                        <div>{item.value}</div>
                        
                     </div>
                  )}
                  </div>
               </div>
         </div>
      </div>
   )
};

export default Footer;
