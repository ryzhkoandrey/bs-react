import { useState } from 'react';
import User from './components/User';
import './App.css';

function App() {
   const [user, setUser] = useState('Bogdan');

   return (
      <div className="App">
         <User />
      </div>
   );
}

export default App;
