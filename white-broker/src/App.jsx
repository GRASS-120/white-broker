import { useContext } from 'react';
import { Context } from './context/context';

function App() {
   const data = useContext(Context);

   return (
      <>
         <p className="text-3xl font-bold underline">
            {data.mainPage.banner[0].title}
         </p>
      </>
   );
}

export default App;
