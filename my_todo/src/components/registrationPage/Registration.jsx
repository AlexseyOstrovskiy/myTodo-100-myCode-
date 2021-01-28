import s from './Registration.module.css';
import  {NavLink } from 'react-router-dom';

const Registration = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.divPadding}>
                <NavLink to='/inToPrivAcc'>Войти в приватный аккаунт</NavLink>
                {/* <button>Войти в приватный аккаунт</button> */}
            </div>
            <div className={s.divPadding}>
            <NavLink to='/inToPublicAcc'>Войти в публичный аккаунт</NavLink>
                {/* <button>Войти в публичный аккаунт</button> */}
            </div>
            <div className={s.divPadding}>
            <NavLink to='/createPrivAcc'>Создать приватный аккаунт</NavLink>
                {/* <button>Создать приватный аккаунт</button> */}
            </div>
            <div className={s.divPadding}>
            <NavLink to='/createPublicAcc'>Создать публичный аккаунт</NavLink>
                {/* <button>Создать публичный аккаунт</button> */}
            </div>
        </div>
    )
}
export default Registration;