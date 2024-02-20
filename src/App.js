import { useState } from 'react';
import './App.css'

function App(){

  let [todoInput,updateTodoInput] = useState("text")

  let [todoList,updateTodoList] = useState(
    [
      { 
        id:1,
        task:'Learn React'
      },
      { 
        id:2,
        task:'Learn Angular'
      }
    ]
  )
  let nexId = 3
  function addNewTodo(){

            if(todoInput == "") {
              alert("add some task ")
            }
            else{
              
               let newTodos = [
                ...todoList,
                {
                  id : nexId++,
                  task :todoInput
                }

              ]
              updateTodoList(newTodos);
              updateTodoInput("")
            }
  }

  function deleteTodo(id){
    let filteredTodos = todoList.filter(
      (todo) => {
        return  todo.id != id 
      }
    )
        updateTodoList(filteredTodos)
  }


  return(
          <div className="container mt-5 w-50">
            <h3 className='text-center'>Todo For React</h3>
            <div className="input-group">

            <input className="form-control" onChange={(e)=>{
              let task = e.target.value;
              updateTodoInput(task)
            }} type = 'text' value={todoInput}/>

            <button onClick={()=>{
              addNewTodo()
            }} className="btn btn-primary">Add</button>

            </div>
            <ul className="list-group mt-4">
                        {
                          todoList.map(
                            (todo) => {
                              return  (
                                <li key = {todo.id} className="list-group-item">
                                    <p>{todo.task}</p>
                                    <button onClick={()=>{
                                      deleteTodo(todo.id)
                                    }} className="btn">❌</button>
                                </li>
                              )
                            }
                          )
                        }
                     
                    
      
              
              
              
              
              
            
            </ul>
          </div>

  )
}
export default App;
