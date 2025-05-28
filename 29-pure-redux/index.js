import store from './redux/store.js';
import getCurrentTime from './utils/getCurrentTime.js';

const addTimeBtn = document.getElementById('addTime');
const timesList = document.getElementById('timesList');

addTimeBtn.addEventListener('click', () => {
   store.dispatch({
      type: 'ADD_CURRENT_TIME',
      payload: getCurrentTime(),
   });
});

store.subscribe(() => {
   timesList.innerHTML = '';

   const times = store.getState();

   times.forEach((time) => {
      let li = document.createElement('li');
      li.innerText = time;
      timesList.appendChild(li);
   });
});
