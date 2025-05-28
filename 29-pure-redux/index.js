import store from './redux/store.js';
import getCurrentTime from './utils/getCurrentTime.js';

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
   store.dispatch({
      type: 'ADD_CURRENT_TIME',
      payload: getCurrentTime(),
   });
});
