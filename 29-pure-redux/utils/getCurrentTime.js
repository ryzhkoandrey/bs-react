function getCurrentTime() {
   const now = new Date();
   const hours = now.getHours().toString();
   const minutes = now.getMinutes().toString();
   const seconds = now.getSeconds().toString();

   const currentTime = `${hours}:${minutes}:${seconds}`;
   return currentTime;
}

export default getCurrentTime;
