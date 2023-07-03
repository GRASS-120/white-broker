import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer/Footer';
import Header from '../components/common/Header/Header';

// children для отрисовки error page
const RouterLayout = ({ children }) => {
   return (
      <div className="flex min-h-screen w-full flex-col">
         <Header />
         {children}
         <Outlet />
         <Footer />
      </div>
   );
};

export default RouterLayout;
