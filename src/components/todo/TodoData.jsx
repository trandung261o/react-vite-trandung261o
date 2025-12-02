
const TodoData = (props) => {
    /**
     * prop la mot object {}
     * {
     *      name: "Eric",
     *      age: 25,
     *      data: {}
     * }
     */

    //object destructuring
    const { name, age, data } = props;

    console.log(">>> check props:", props);
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching youtube</div>
        </div>
    );
}

export default TodoData;