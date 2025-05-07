import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
   return (
      <div className={styles.todoListContainer}>
         {!todos.length && <h2>Todo list is empty</h2>}

         {todos.map(({ text, isCompleted, id }) => (
            <Todo
               key={id}
               text={text}
               isCompleted={isCompleted}
               id={id}
               deleteTodo={deleteTodo}
            />
         ))}
      </div>
   );
}

export default TodoList;
