import Navigation from '../Navigation/Navigation';
import AddNewCaseForm from '../AddNewCase/AddNewCaseForm';
import s from './PublicAcc.module.css';
import { NavLink } from 'react-router-dom';


const PublicAcc = (props) => {
    return (
        <div>
            <Navigation />
            <h1>
                Публичный аккаунт - {props.getNameNewAcc()} !
         </h1>
            <AddNewCaseForm 
            getNameNewAcc = {props.getNameNewAcc}
            addNewMyCaseFromState={props.addNewMyCaseFromState} 
            />
            <NavLink to='/showexistingcase'>
                <p>
                <button>Просмотреть существующий список</button>
                </p>
            </NavLink>
        </div>
    )
}
export default PublicAcc;