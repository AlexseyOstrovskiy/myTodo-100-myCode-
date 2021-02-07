import Navigation from '../Navigation/Navigation';
import CaseNameItem  from '../ShowExistingCase/ItemsForShowExistingCase/CaseNameItem';
import PriorityItem  from '../ShowExistingCase/ItemsForShowExistingCase/PriorityItem';
import StartDataItem  from '../ShowExistingCase/ItemsForShowExistingCase/StartDataItem';
import EndDataItem  from '../ShowExistingCase/ItemsForShowExistingCase/EndDataItem';
import PlaceCaseItem  from '../ShowExistingCase/ItemsForShowExistingCase/PlaceCaseItem';
import ValueCaseItem  from '../ShowExistingCase/ItemsForShowExistingCase/ValueCaseItem';
import { NavLink } from 'react-router-dom';

const  ShowExistingCase = (props) => {
   
    let state = props.state;
    let existingName = state.lastNameForPublicAcc;

//     alert ("state.lastNameForPublicAcc;" + state.lastNameForPublicAcc);
//    alert ("propsF" + props.getNameNewAcc());

    let caseNameElements;
    let priorityElements ;
    let startCaseDataElements;
    let endCaseDataElements;
    let placeCaseElements;
    let valueCaseElements;
    // let d = state.casesForPublicAcc.lenght();
    let d = state.casesForPublicAcc.length;
    alert ('d = ' + d);
    for(let i=0; i<d+1; i++)
    {
    if(existingName==state.casesForPublicAcc.nameForPublicAcc){
    caseNameElements = state.casesForPublicAcc.map((i) => <CaseNameItem  newCaseName={i.newCaseName} />);
    priorityElements = state.casesForPublicAcc.map((i) => <PriorityItem  priority={i.priority} />);
    startCaseDataElements = state.casesForPublicAcc.map((i) => <StartDataItem  startCaseData={i.startCaseData} />);
    endCaseDataElements = state.casesForPublicAcc.map((i) => <EndDataItem  endCaseData={i.endCaseData} />);
    placeCaseElements = state.casesForPublicAcc.map((i) => <PlaceCaseItem  placeCase={i.placeCase} />);
    valueCaseElements = state.casesForPublicAcc.map((i) => <ValueCaseItem  valueCase={i.valueCase} />);
    }
   
}
    return (
        <div>
            <Navigation />
         <h1> Список дел для списка  {existingName}
             {/* {props.getNameNewAcc()} */}

              </h1>

         <table border="1">
                <tr>
                    <td>Ваше мероприятие</td>
                    <td>Приоритет</td>
                    <td>Начало</td>
                    <td>Конец</td>
                    <td>Место проведения</td>
                    <td>Примечание</td>
                </tr>
                <tr>
                    <td>{caseNameElements}</td>
                    <td>{priorityElements} </td>
                    <td>{startCaseDataElements}</td>
                    <td>{endCaseDataElements}</td>
                    <td>{placeCaseElements}</td>
                    <td>{valueCaseElements}</td>
                </tr>
            </table>
         
            <NavLink to='/newPublicAcc'>
                <p>
                <button>Назад</button>
                </p>
            </NavLink>
        </div>
    )
}
export default ShowExistingCase;