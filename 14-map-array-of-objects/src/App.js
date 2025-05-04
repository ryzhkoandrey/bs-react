import './App.css';
import persons from './data/persons';
import Person from './components/Person';

function App() {
   return (
      <div className='App'>
         {persons.map((person) => {
            return (
               <Person
                  key={person.id}
                  id={person.id}
                  firstName={person.firstName}
                  lastName={person.lastName}
                  email={person.email}
                  img={person.img}
               />
            );
         })}
      </div>
   );
}

export default App;
