import s from './Registration.module.css';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.divPadding}>
                <NavLink to='/inToPrivAcc'>
                    <button>Войти в приватный аккаунт</button>
                </NavLink>
            </div>
            <div className={s.divPadding}>
                <NavLink to='/inToPublicAcc'>
                    <button>Войти в публичный аккаунт</button>
                </NavLink>
            </div>
            <div className={s.divPadding}>
                <NavLink to='/createPrivAcc'>
                    <button>Создать приватный аккаунт</button>
                </NavLink>
            </div>
            <div className={s.divPadding}>
                <NavLink to='/createPublicAcc'>
                    <button>Создать публичный аккаунт</button>
                </NavLink>
            </div>
        </div>
    )
}
export default Registration;