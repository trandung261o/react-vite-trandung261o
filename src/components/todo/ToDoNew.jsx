import { useState } from "react";

const ToDoNew = (props) => {
    console.log(">>> check props:", props)

    //useState hook (getter/setter)
    // const valueInput = "eric";
    const [valueInput, setValueInput] = useState("eric")

    const { addNewTodo } = props;

    // addNewTodo("eric")

    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}

export default ToDoNew;