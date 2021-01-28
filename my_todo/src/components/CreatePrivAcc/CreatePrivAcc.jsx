import s from './CreatePrivAcc.module.css';
import Navigation from '../Navigation/Navigation';

const  CreatePrivAcc = () => {
  
    return (
        <div>
             <Navigation/>
             <div>Для создания нового приватного аккаунта введите логин и пароль!</div>
            <p><strong>Логин:</strong>
                <input maxlength="25" size="40" name="login"></input></p>
            <p><strong>Пароль:</strong>
                <input type="password" maxlength="25" size="40" name="password"></input></p>
                <button >Создать</button>
        </div>
    )
}
export default CreatePrivAcc;