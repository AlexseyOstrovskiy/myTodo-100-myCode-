const  LoginAndPassForm = () => {
    return (
        <div>
          <p><strong>Логин:</strong>
                <input maxlength="25" size="40" name="login"></input></p>
            <p><strong>Пароль:</strong>
                <input type="password" maxlength="25" size="40" name="password"></input></p>
                <button >Подтвердить</button>
        </div>
    )
}
export default LoginAndPassForm;