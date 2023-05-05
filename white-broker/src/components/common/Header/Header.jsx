import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <div className="w-full bg-slate-300 p-10">
         <NavLink to="/">home </NavLink>
         <NavLink to="/about">about</NavLink>
      </div>
   );
};

export default Header;
