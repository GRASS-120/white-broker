import { useContext } from 'react';
import Header from './components/common/Footer/Header';
import Footer from './components/common/Header/Footer';
import { Context } from './context/context';
import MainPage from './pages/MainPage';

function App() {
   const data = useContext(Context);

   return (
      <div className="flex min-h-screen w-full flex-col">
         <Header />
         <MainPage />
         <Footer />
      </div>
   );
}

export default App;
