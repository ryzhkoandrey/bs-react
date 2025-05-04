import persons from '../data/persons';
import Person from './Person';

function Persons() {
   return (
      <div>
         {persons.map((person) => {
            return <Person key={person.id} {...person} />;
         })}
      </div>
   );
}

export default Persons;
