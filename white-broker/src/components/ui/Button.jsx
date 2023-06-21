// ! сделать два стиля: light (белая) и dark (фиолетовая)
const Button = ({ props, children}) => {
   return (
      <button className="bg-[#5B41FF] py-2  px-5 text-white rounded-xl transition-all hover:brightness-125 " type="">
         {children}
      </button>
   );
};

export default Button;
