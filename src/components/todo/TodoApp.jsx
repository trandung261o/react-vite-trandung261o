import './todo.css'
import ToDoData from './ToDoData'
import ToDoNew from './ToDoNew'
import reactLogo from '../../assets/react.svg'
import { useState } from 'react'

const TodoApp = () => {
    const [todoList, setToDoList] = useState([
        // { id: 1, name: "Learning React" },
        // { id: 2, name: "Watching Youtube" }
    ])

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

    const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id)
        setToDoList(newTodo)
    }

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <ToDoNew
                addNewTodo={addNewTodo}
            />

            {todoList.length > 0 ?

                <ToDoData
                    todoList={todoList}
                    deleteTodo={deleteTodo}
                />

                :

                <div className="todo-image">
                    <img src={reactLogo} className='logo' />
                </div>
            }

            {/* {todoList.length > 0 &&
          <ToDoData
            todoList={todoList}
          />
        }
   
        {todoList.length === 0 &&
          <div className="todo-image">
            <img src={reactLogo} className='logo' />
          </div>
        } */}

        </div>
    )
}

export default TodoApp;