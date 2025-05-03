import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

function App() {
   const [count, setCount] = useState(0);

   return (
      <div className='App'>
         <Counter count={count} />
         <Button />
         <Button />
         <Button />
         <Button />
      </div>
   );
}

export default App;
