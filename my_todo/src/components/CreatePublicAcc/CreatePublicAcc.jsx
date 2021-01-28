import s from './CreatePublicAcc.module.css';
import Navigation from '../Navigation/Navigation';
import React from 'react';
import { NavLink } from 'react-router-dom';

const  CreatePublicAcc = (props) => {
    let nameAccRef = React.createRef();
    let addNameAcc = ()=>{
        let name = nameAccRef.current.value;
        alert(name);
        props.addNameForPublicAcc(name);
    };
    return (
        <div>
            
            <Navigation/>
            <div>Для создания публичного аккаунта введите имя аууаунта!</div>
            <p><strong>Имя аккаунта:</strong>
                <input ref={nameAccRef} maxlength="25" size="40" name="login"></input></p>
       <NavLink exact to='/newPublicAcc'>
        <button onClick={addNameAcc}>Создать</button>
        </NavLink>
        </div>
    )
}
export default CreatePublicAcc;