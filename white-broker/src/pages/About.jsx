import { useContext } from 'react';
import Context from '../context/context';

const About = () => {
   const data = useContext(Context);
   return <div>{data.title}</div>;
};

export default About;
