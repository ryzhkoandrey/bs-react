import { useState } from 'react';

function TodoForm({ addTodo }) {
   const [text, setText] = useState('');

   const onSubmitHandler = (event) => {
      event.preventDefault();
      addTodo(text);
      setText('');
   };

   return (
      <form onSubmit={onSubmitHandler}>
         <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter new Todo"
         />
         <button type="submit">Submit</button>
      </form>
   );
}

export default TodoForm;
