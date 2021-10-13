/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km) va applicato uno sconto del 20 % per i minorenni va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca. */

/* 
creo una variabile per ogni form che ho:
    - nome completo 
    - km da percorrere
    - fascia età
    - bottone genera
    - bottone annulla 
 */

//selezioni dom
const fullNameInputElement = document.getElementById("full-name");
const distanceInputElement = document.getElementById("distance");
const ageSelectElement = document.getElementById("age");
const generateButtonElement = document.getElementById('generate');
const cancelButtonElement = document.getElementById('cancel');
const ticketPlaceName = document.getElementById('ticket_name');
const ticketPlacediscount = document.getElementById('ticket_discount');
const ticketPlaceNumberCarriage = document.getElementById('number_carriage');
const ticketPlaceCpNumber = document.getElementById('cp_number');
const ticketPlacePrice = document.getElementById('ticket_price');

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}
//generatori random
const numberCp = randomInteger(90000, 100000);
const numberCarriage = randomInteger(1, 5);
//Quando clicca mi genera i dati biglietto
generateButtonElement.addEventListener("click", function () {
    const fullName = fullNameInputElement.value;
    const age = ageSelectElement.value;
    const km_from_run = distanceInputElement.value;
    //mi stampo in console i valori di input
    console.log(fullName, km_from_run, age);


    /* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
    */

    //calcolo prezzo biglietto con resto in centesimi
    let price = (km_from_run * 0.21).toFixed(2);

    //calcola il prezzo dei biglietti scontati
    if (age == 'minorenne') {
        let new_price = (price - (price * 0.20)).toFixed(2) + ' €'
        ticketPlacediscount.innerHTML = 'biglietto under18'
        ticketPlacePrice.innerHTML = new_price

    } else if (age == 'over65') {
        let new_price = (price - (price * 0.40)).toFixed(2) + ' €'
        ticketPlacediscount.innerHTML = 'biglietto over65'
        ticketPlacePrice.innerHTML = new_price

    } else {
        console.log('nessuno sconto');
        console.log(price)
        ticketPlacediscount.innerHTML = 'biglietto standard'
        ticketPlacePrice.innerHTML = price + ' €'

    }
    ticketPlaceName.innerHTML = fullName
    ticketPlaceCpNumber.innerHTML = numberCp
    ticketPlaceNumberCarriage.innerHTML = numberCarriage

})
//al click di annulla tutto si cancella
cancelButtonElement.addEventListener("click", function () {
    fullNameInputElement.value = ""
    ageSelectElement.value = ''
    distanceInputElement.value = ''
    ticketPlaceName.innerHTML = ''
    ticketPlacediscount.innerHTML = ''
    ticketPlaceNumberCarriage.innerHTML = ''
    ticketPlaceCpNumber.innerHTML = ''
    ticketPlacePrice.innerHTML = ''
})
