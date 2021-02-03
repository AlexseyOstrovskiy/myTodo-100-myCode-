import React from 'react';
const AddNewCaseForm = (props) => {
    let nameForPublicAcc = props.getNameNewAcc();
    let newCaseNameRef = React.createRef();
    let priorityRef =React.createRef();
    let startCaseDataRef = React.createRef();
    let endCaseDataRef = React.createRef();
    let placeCaseRef = React.createRef();
    let valueCaseRef = React.createRef();
    let createNewCaseButton =()=>{
        let newCaseName = newCaseNameRef.current.value;
        let priority = priorityRef.current.value;
        let startCaseData = startCaseDataRef.current.value;
        let endCaseData = endCaseDataRef.current.value;
        let placeCase = placeCaseRef.current.value;
        let valueCase = valueCaseRef.current.value;
        props. addNewMyCaseFromState(nameForPublicAcc,newCaseName, priority,
            startCaseData,endCaseData,placeCase,valueCase);
        alert("Дело под именем " + newCaseName + " добавлено в публичный список - " + nameForPublicAcc);
    }
    return (
        <div>
            <h2> Добавление в список нового дела!</h2>
            <p><strong>Название:</strong>
                <input ref={newCaseNameRef} maxlength="25" size="40" name="newCaseName"></input></p>
                <p>
                    <strong>Выберете приоритет события:</strong>
                    <select id='priority'  ref={priorityRef}>
                                    <option value='High'> Низкий приоритет</option>
                                    <option value='Average'>Средний приоритет</option>
                                    <option value='Low'>Высокий приоритет</option>
                                    <option value='non'>Без приоритета</option>
                    </select>
                </p>
            <p><strong>Начало:</strong>
                <input ref ={startCaseDataRef} type="Date" name="startCaseData"></input></p>
            <p><strong>Конец:</strong>
                <input ref={endCaseDataRef} type="Date" name="endCaseData"></input></p>
            <p><strong>Место:</strong>
                <input ref={placeCaseRef} name="placeCase"></input></p>
            <p><strong>Примечания:</strong>
                <textarea ref ={valueCaseRef} name="valueCase"></textarea>
            </p>
            <button onClick={createNewCaseButton} >Создать</button>
        </div>
    )
}
export default AddNewCaseForm;