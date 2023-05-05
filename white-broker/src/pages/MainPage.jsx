import { useContext } from 'react';
import Title from '../components/ui/Title';
import Context from '../context/context';

const MainPage = () => {
   const { banner } = useContext(Context);
   return (
      <div>
         {/* в данном случае index как key можно использовать */}
         {banner.map((item, index) => (
            <Title key={index}>
               {index + 1}) {item.title}
            </Title>
         ))}
      </div>
   );
};

export default MainPage;
