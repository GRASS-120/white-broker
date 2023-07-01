// ! сделать два стиля: light (белая) и dark (фиолетовая)
const Button = ({ onClick, children }) => {
   return (
      <button
         onClick={onClick}
         className="rounded-xl bg-[#5B41FF]  px-5 py-2 text-white transition-all hover:brightness-125 "
         type=""
      >
         {children}
      </button>
   );
};

export default Button;
