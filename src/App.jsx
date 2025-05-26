import './components/todo/todo.css'
import ToDoData from './components/todo/ToDoData'
import ToDoNew from './components/todo/ToDoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {
  const [todoList, setToDoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" }
  ])

  const hoidanit = "Eric Arsenal";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }

    setToDoList([...todoList, newTodo])
    //array.push
  }

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <ToDoNew
        addNewTodo={addNewTodo}
      />
      <ToDoData
        name={hoidanit}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
