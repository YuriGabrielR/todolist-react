import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCheckCircle} from '@fortawesome/free-regular-svg-icons';
import { todoProps } from '../../App';


const trashIcon = <FontAwesomeIcon icon={faTrashCan}/>;
const doneIcon = <FontAwesomeIcon icon={faCheckCircle}/>;

type Props = {

  todo: todoProps; 
  completeTask:(id:number)=>void;
  deleteTask: (id:number)=>void;

}

export default function Card({todo, completeTask, deleteTask}:Props) {

  function doneTask(){
    completeTask(todo.id);
  }

  function btnDeleteTask(){
    deleteTask(todo.id)
  }

  return (

   <div className="cardContainer">

    <div className={`card ${todo.completed ? 'completed' : ''}`}>
      <span>
        <h3 className={todo.completed ? 'completed': ''} > 
        {todo.title} 
        </h3>
      </span>

      <span className='buttons-card'>
        <button onClick={doneTask} className='btn'> {doneIcon} </button>
        <button onClick={btnDeleteTask} className='btn'>
          {trashIcon}
         </button>
      </span>

    </div>

   </div>
  )
}
