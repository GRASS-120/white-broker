// ! сделать два стиля: light (белая) и dark (фиолетовая)
const Button = ({ props, children }) => {
   return <button className="bg-red-700 p-5">{children}</button>;
};

export default Button;
