const initialState = [];

// {
//     type: 'ADD_NAME',
//     payload: 'Alice',
// }

function reducer(state, action) {
   if (action.type === 'ADD_NAME') {
      return [...state, action.payload];
   }

   return state;
}
