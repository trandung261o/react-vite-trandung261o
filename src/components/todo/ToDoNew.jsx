const ToDoNew = (props) => {
    console.log(">>> check props:", props)
    const { addNewTodo } = props;

    // addNewTodo("eric")

    return (
        <div className="todo-new">
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default ToDoNew;