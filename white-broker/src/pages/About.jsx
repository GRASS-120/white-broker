import { useContext } from 'react';
import Context from '../context/context';

const About = () => {
   const data = useContext(Context);
   return <div>{data.title}dasdasdsa</div>;
};

export default About;
