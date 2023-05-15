import { NavLink } from 'react-router-dom';
import { headerData } from '../../../context/headerData';
const Navitem = (item) => {
    return (
        <li>
                <NavLink
                style={({isActive}) => ({
                   color: isActive ? '#3DA1DA' : '#111010',
                   margin: '10px',
                   
                   })
                }
                to="/"
                className={({ isActive, isPending }) =>
                   isPending ? 'pending' : isActive ? 'active' : ''
                }
                >
                {item}
             </NavLink> 
        </li>
    )
}

export default Navitem