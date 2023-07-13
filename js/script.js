//elemento dove visualizzerò il timer
const currentTimeEl = document.querySelector(".current-time");

let currentTime = new Date();

currentTimeEl.innerHTML = `${currentTime.getHours()} : ${currentTime.getMinutes()} : 
${currentTime.getSeconds()}`;

//con la funzione setinterval vado a dare funzionamento effettivo
//all'orologio

setInterval(function () {
    currentTime = new Date();
    currentTimeEl.innerHTML = `${currentTime.getHours()} : ${currentTime.getMinutes()} : 
${currentTime.getSeconds()}`;
}, 1000); //ogni secondo viene aggiornato l'oggetto Date(), eseguita l'istruzione della funzione di callback e quindi
          //viene aggiornata la data ogni secondo