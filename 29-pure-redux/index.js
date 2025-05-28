import store from './redux/store.js';
import getCurrentTime from './utils/getCurrentTime.js';

const addTimeBtn = document.getElementById('addTime');
const clearTimesBtn = document.getElementById('clearTimes');
const timesList = document.getElementById('timesList');

addTimeBtn.addEventListener('click', () => {
   store.dispatch({
      type: 'ADD_CURRENT_TIME',
      payload: getCurrentTime(),
   });
});

clearTimesBtn.addEventListener('click', () => {
   store.dispatch({
      type: 'CLEAR_ALL_TIMES',
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
