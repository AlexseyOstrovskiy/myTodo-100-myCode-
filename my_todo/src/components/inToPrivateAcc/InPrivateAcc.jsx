import s from './InPrivateAcc.module.css';
import Navigation from '../Navigation/Navigation';
import LoginAndPassForm from '../LoginAnpPassForm/LoginAndPassForm';

const InPrivateAcc = () => {
    return (
        <div>
            <Navigation />
            <div>Для входа в приватный аккаунт введите логин и пароль!</div>
            <LoginAndPassForm/>
        </div>
    )
}
export default InPrivateAcc;