//elemento dove visualizzerò il timer
const currentTimeEl = document.querySelector(".current-time");

const currentTime = new Date();

currentTimeEl.innerHTML = `${currentTime.getHours()} : ${currentTime.getMinutes()} : 
${currentTime.getSeconds()}`;