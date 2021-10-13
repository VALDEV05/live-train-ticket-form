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
const fullNameInputElement = document.getElementById("full-name");
const distanceInputElement = document.getElementById("distance");
const ageSelectElement = document.getElementById("age");
const generateButtonElement = document.getElementById('generate');
const cancelButtonElement = document.getElementById('cancel');

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
    console.log(price)

    //calcola il prezzo dei biglietti scontati

})
//al click di annulla tutto si cancella


//creo il biglietto e mostro il risultato


