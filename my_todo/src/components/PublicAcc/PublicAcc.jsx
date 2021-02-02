import Navigation from '../Navigation/Navigation';
import AddNewCaseForm from '../AddNewCase/AddNewCaseForm';
import s from './PublicAcc.module.css';

const  PublicAcc = (props) => {
    
    
    
    return (
        <div>
            <Navigation/>
         <h1>
             Публичный аккаунт - {props.getNameNewAcc()} !
         </h1>
         <button>Добавить новое дело в список</button>
         <button>Просмотреть существующий список</button>
         <AddNewCaseForm/>
           </div>
    )
}
export default PublicAcc;