
import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

export type todoProps = {
  id: number;
  title:string;
  completed:boolean;
}

function App(){
  
  const [todos, setTodos] = useState<todoProps[]>(()=>{

    let db_todos = localStorage.getItem('@todolist:tasks'); 

    if (db_todos){
      return JSON.parse(db_todos); 
    }

    return [];

  }); 

  
  const [inputTodo, setInputTodo] = useState(''); 

  useEffect(()=>{

    localStorage.setItem('@todolist:tasks', JSON.stringify(todos));

  },[todos])

 
  function addTask(){
    setTodos( (previousTodo)=> 
    [...previousTodo, 

      {
        id:Math.random(),
        title: inputTodo,
        completed:false
      }
    ]
    
    );


    setInputTodo(''); 
    
  }
  
  function inputChange(e:ChangeEvent<HTMLInputElement>){
    setInputTodo(e.target.value);

  }

  function completeTask(id:number){

    setTodos((previousTodos)=>(

      previousTodos.map((todo)=>(

        todo.id != id ? todo : {...todo, completed: !todo.completed }


      ))

    ))
  }

  function deleteTask(id:number){
    setTodos((previousTodos)=>(

      previousTodos.filter((todo)=>(

        todo.id != id 
        
      ))



    ))

  }

  return (
  
   <div className='container'>
      <div className='todoControlls'>

        <input 
        type="text"
        placeholder='Escreva sua tarefa' 
        autoComplete='off'
        id='input-todo'
        value={inputTodo}
        onChange={inputChange}/>

        <button onClick={addTask} className='btn--add'>+</button>

     
      </div>  

      <div className='divCards'>
       
       
       {todos.map(todo =>(

        <Card key={todo.id} todo={todo} completeTask ={completeTask} deleteTask={deleteTask}/>

       ))}

      </div>
       

    </div>


  )

}


export default App
