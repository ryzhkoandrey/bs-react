import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

const texts = ['Click me', 'Click me please', 'Hit me', 'Press me'];

function App() {
   const [count, setCount] = useState(0);

   const incrementCount = () => {
      setCount(count + 1);
   };

   return (
      <div className='App'>
         <Counter count={count} />
         <Button text={texts[0]} onClick={incrementCount} />
         <Button text={texts[1]} onClick={incrementCount} />
         <Button text={texts[2]} onClick={incrementCount} />
         <Button text={texts[3]} onClick={incrementCount} />
      </div>
   );
}

export default App;
