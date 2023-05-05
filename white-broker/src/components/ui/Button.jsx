// ! сделать два стиля: light (белая) и dark (фиолетовая)
const Button = ({ props, children }) => {
   return (
      <button className="bg-slate-400 p-5" type="submit">
         {children}
      </button>
   );
};

export default Button;
