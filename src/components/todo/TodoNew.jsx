import { useState } from "react";

const TodoNew = (props) => {

    const [valueInput, setValueInput] = useState("eric");

    const { addNewTodo } = props;

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");      //mỗi lần bấm nút Add thì reset ô input bằng rỗng
    }

    const handleOnChange = (name) => {
        setValueInput(name);
    }

    return (
        <div className='todo-new'>
            <input type="text" onChange={event => handleOnChange(event.target.value)}
                value={valueInput}
            />

            <button style={{ cursor: "pointer" }} onClick={handleClick}>
                Add
            </button>

            <div>
                My text input is = {valueInput}
            </div>
        </div >
    );
}

export default TodoNew;