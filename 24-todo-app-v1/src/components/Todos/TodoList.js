import Todo from './Todo';

function TodoList({ todos }) {
   return (
      <>
         {todos.map((todo, index) => {
            return <Todo key={index} todo={todo} />;
         })}
      </>
   );
}

export default TodoList;
