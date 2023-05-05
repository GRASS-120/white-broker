import { useContext } from 'react';
import Form from '../components/Form/Form';
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
         <Form />
      </div>
   );
};

export default MainPage;
