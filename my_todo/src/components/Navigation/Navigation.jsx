import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import Registration from '../registrationPage/Registration';

const  Navigation = () => {
    return (
        <div className={s.navStyle}>
           <NavLink exact to='/' >Главная страница</NavLink>

        </div>
    )
}
export default Navigation;