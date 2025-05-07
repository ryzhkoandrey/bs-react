import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({ text, isCompleted, id, deleteTodo }) {
   return (
      <div className={styles.todo} onDoubleClick={() => deleteTodo(id)}>
         <RiTodoFill className={styles.todoIcon} />
         <div className={styles.todoText}>{text}</div>
      </div>
   );
}

export default Todo;
