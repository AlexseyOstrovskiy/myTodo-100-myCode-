import s from './InPublicAcc.module.css';
import Navigation from '../Navigation/Navigation';

const  InToPublicAcc = () => {
    return (
        <div>
            <Navigation/>
            <div>Для входа в публичный аккаунт введите имя аууаунта!</div>
            <p><strong>Имя аккаунта:</strong>
                <input maxlength="25" size="40" name="login"></input></p>
        <button>Войти</button>
        </div>
    )
}
export default InToPublicAcc;