import React from "react";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

const ErrorBoundary = () => {
   return (
      <div className="mt-24">
         <div className="max-w-[1440px] m-auto">
            <div className="flex flex-col justify-center text-center mt-24">
               <div className=" font-semibold text-9xl mb-5">404</div>
               <div className=" text-2xl font-semibold">ПОХОЖЕ ТАКОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ</div>
               <a href="/"><button className="rounded-xl my-24 px-4 border-solid border-4 border-[#a3a3a3]  bg-slate-100 py-5 text-black sm:text-3xl lg:mx-60 transition-all hover:bg-[#a3a3a3]">ВЕРНУТЬСЯ НА ГЛАВНУЮ</button></a>
            </div>
         </div>
         
      </div>
   );
};

export default ErrorBoundary;
