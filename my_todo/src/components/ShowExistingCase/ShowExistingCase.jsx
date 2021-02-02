import Navigation from '../Navigation/Navigation';
const  ShowExistingCase = (props) => {
    return (
        <div>
            <Navigation />
         <h1> Список дел для списка  {props.getNameNewAcc()} </h1>

         
        
        </div>
    )
}
export default ShowExistingCase;