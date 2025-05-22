import { useContext } from 'react';
import UserContext from '../context/UserContext';

function ChangeUser() {
   const { user, setUser } = useContext(UserContext);

   return (
      <button onClick={() => setUser(user === 'Bogdan' ? 'Andrey' : 'Bogdan')}>
         Change User
      </button>
   );
}

export default ChangeUser;
