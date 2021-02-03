import s from './Registration.module.css';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.divPadding}>
                <NavLink to='/inToPrivAcc'>
                    <button className={s.coolButton}>Войти в приватный аккаунт</button>
                </NavLink>
            </div>
            <div className={s.divPadding}>
                <NavLink to='/inToPublicAcc'>
                    <button className={s.coolButton}>Войти в публичный аккаунт</button>
                </NavLink>
            </div>
            <div className={s.divPadding}>
                <NavLink to='/createPrivAcc'>
                    <button className={s.coolButton}>Создать приватный аккаунт</button>
                </NavLink>
            </div>
            <div className={s.divPadding}>
                <NavLink to='/createPublicAcc'>
                    <button className={s.coolButton}>Создать публичный аккаунт</button>
                </NavLink>
            </div>
        </div>
    )
}
export default Registration;