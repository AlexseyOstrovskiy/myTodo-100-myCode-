import s from './CreatePrivAcc.module.css';
import Navigation from '../Navigation/Navigation';
import LoginAndPassForm from '../LoginAnpPassForm/LoginAndPassForm';


const  CreatePrivAcc = () => {
  
    return (
        <div>
             <Navigation/>
             <div>Для создания нового приватного аккаунта введите логин и пароль!</div>
             <LoginAndPassForm/>
        </div>
    )
}
export default CreatePrivAcc;