const AddNewCaseForm = (props) => {
    return (
        <div>
            <h2> Добавление в список нового дела!</h2>
            <p><strong>Название:</strong>
                <input maxlength="25" size="40" name="newCaseName"></input></p>
                <p>
                    <strong>Выберете приоритет события:</strong>
                    <select id='priority' >
                                    <option value='High'> Низкий приоритет</option>
                                    <option value='Average'>Средний приоритет</option>
                                    <option value='Low'>Высокий приоритет</option>
                                    <option value='non'>Без приоритета</option>
                    </select>
                </p>
            {/* <p><input type="checkbox" name="lowImportance" value="low" /> Низкий приоритет</p>
            <p> <input type="checkbox" name="mediumImportance" value="medium" /> Средний приоритет </p>
            <p> <input type="checkbox" name="highImportance" value="high" /> Высокий приоритет</p> */}
            <p><strong>Начало:</strong>
                <input type="Date" name="startCaseData"></input></p>
            <p><strong>Конец:</strong>
                <input type="Date" name="endCaseData"></input></p>
            <p><strong>Место:</strong>
                <input name="placeCase"></input></p>
            <p><strong>Примечания:</strong>
                <textarea name="valueCase"></textarea>
            </p>
            <button>Создать</button>
        </div>
    )
}
export default AddNewCaseForm;