import { NavLink } from 'react-router-dom';

// надо как-то интегрировать добавление классов в navlink через tailwind

const Header = () => {
   return (
      <div className="w-full bg-slate-300 p-10">
         <NavLink
            to="/"
            className={({ isActive, isPending }) =>
               isPending ? 'pending' : isActive ? 'active' : ''
            }
         >
            home{' '}
         </NavLink>
         <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
               isPending ? 'pending' : isActive ? 'active' : ''
            }
         >
            about
         </NavLink>
      </div>
   );
};

export default Header;
