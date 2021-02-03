import Navigation from '../Navigation/Navigation';
import CaseNameItem  from '../ShowExistingCase/ItemsForShowExistingCase/CaseNameItem';
import PriorityItem  from '../ShowExistingCase/ItemsForShowExistingCase/PriorityItem';
import StartDataItem  from '../ShowExistingCase/ItemsForShowExistingCase/StartDataItem';
import EndDataItem  from '../ShowExistingCase/ItemsForShowExistingCase/EndDataItem';
import PlaceCaseItem  from '../ShowExistingCase/ItemsForShowExistingCase/PlaceCaseItem';
import ValueCaseItem  from '../ShowExistingCase/ItemsForShowExistingCase/ValueCaseItem';

const  ShowExistingCase = (props) => {
    let state = props.state;
    
    let caseNameElements = state.casesForPublicAcc.map((i) => <CaseNameItem  newCaseName={i.newCaseName} />);
    let priorityElements = state.casesForPublicAcc.map((i) => <PriorityItem  priority={i.priority} />);
    let startCaseDataElements = state.casesForPublicAcc.map((i) => <StartDataItem  startCaseData={i.startCaseData} />);
    let endCaseDataElements = state.casesForPublicAcc.map((i) => <EndDataItem  endCaseData={i.endCaseData} />);
    let placeCaseElements = state.casesForPublicAcc.map((i) => <PlaceCaseItem  placeCase={i.placeCase} />);
    let valueCaseElements = state.casesForPublicAcc.map((i) => <ValueCaseItem  valueCase={i.valueCase} />);
    return (
        <div>
            <Navigation />
         <h1> Список дел для списка  {props.getNameNewAcc()} </h1>

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
         
        
        </div>
    )
}
export default ShowExistingCase;