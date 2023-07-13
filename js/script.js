//elemento dove visualizzerò il tempo corrente
const currentTimeEl = document.querySelector(".current-time");

//el dove visualizzerò il timer
const timerEl = document.getElementById("timer");

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


//intervallo che genera il timer alla rovescia
const interval = setInterval(countdownTimer, 1000);

function countdownTimer() {
    let timeStart = new Date(); //data di partenza
    //la data di scadenza del timer
    let timeArrival = new Date(2023, 6, 14, 9, 30);
    //console.log(timeArrival);

    //console.log(timeArrival.getTime(), timeStart.getTime());

    //la durata in millisecondi del timer
    let diffTime = timeArrival.getTime() - timeStart.getTime();

    if (diffTime < 0) { //se il tempo è scaduto la diff tra tempo corrente e tempo di scadenza è 0
        clearInterval(interval); //fermo il loop
        timerEl.innerHTML = "<span class='message'>Time out!</span>";
        return; //fermo la funzione
    }

    let mss = diffTime; //millisecondi
    let days = Math.floor(mss / (1000 * 3600 * 24)); //giorni
    //sottraggo di volta in volta ai millisecondi totali la quantità di secondi
    //che corrisponde a giorni, ore, minuti, secondi
    mss -= days * 24 * 60 * 60 * 1000;

    let hours = Math.floor(mss / 1000 / 60 / 60); //ore
    mss -= hours * 60 * 60 * 1000;

    let minutes = Math.floor(mss / 1000 / 60); //minuti
    mss -= minutes * 60 * 1000;

    let seconds = Math.floor(mss / 1000); //secondi
    mss -= seconds * 1000;

    timerEl.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
}