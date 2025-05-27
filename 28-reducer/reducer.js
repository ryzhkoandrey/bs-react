const initialState = [];

function reducer(state, action) {
   if (action.type === 'ADD_NAME') {
      return [...state, action.payload];
   }

   if (action.type === 'DELETE_NAME') {
      return state.filter((personName) => personName !== action.payload);
   }

   return state;
}

let newState = reducer(initialState, {
   type: 'ADD_NAME',
   payload: 'Bogdan',
});
console.log(newState);

newState = reducer(newState, {
   type: 'ADD_NAME',
   payload: 'Alice',
});
console.log(newState);

newState = reducer(newState, {
   type: 'DELETE_NAME',
   payload: 'Alice',
});
console.log(newState);
