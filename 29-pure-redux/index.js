import store from './redux/store.js';
import { addCurrentTime, clearTimes } from './redux/actionCreators.js';

const addTimeBtn = document.getElementById('addTime');
const clearTimesBtn = document.getElementById('clearTimes');
const timesList = document.getElementById('timesList');

addTimeBtn.addEventListener('click', () => {
   store.dispatch(addCurrentTime());
});

clearTimesBtn.addEventListener('click', () => {
   store.dispatch(clearTimes());
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
