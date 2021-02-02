const AddNewCaseForm = (props) => {
    return (
        <div>
            <h2> Добавление в список нового дела!</h2>
            <p><strong>Название:</strong>
                <input maxlength="25" size="40" name="newCaseName"></input></p>
            <p><input type="checkbox" name="time" value="time" /> Время</p>
            <p> <input type="checkbox" name="allday" value="allday" /> Весь день </p>
            <p><strong>Начало:</strong>
                <input type="Date" name="startCase"></input></p>
            <p><strong>Конец:</strong>
                <input type="Date" name="endCase"></input></p>
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