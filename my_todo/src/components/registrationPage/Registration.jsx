import s from './Registration.module.css';

const Registration = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.divPadding}>
                <button>Войти в приватный аккаунт</button>
            </div>
            <div className={s.divPadding}>
                <button>Войти в публичный аккаунт</button>
            </div>
            <div className={s.divPadding}>
                <button>Создать приватный аккаунт</button>
            </div>
            <div className={s.divPadding}>
                <button>Создать публичный аккаунт</button>
            </div>
        </div>
    )
}
export default Registration;