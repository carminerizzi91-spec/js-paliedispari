// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let sceltaUtente = prompt("Scegli pari o dispari");
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numRandom() {
    return Math.floor(Math.random() * 5) + 1;
}

// Sommiamo i due numeri

let numeroComputer = numRandom();
let somma = numeroUtente + numeroComputer;

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function pari(numero) {
    return numero % 2 === 0
}

// Dichiariamo chi ha vinto.
let sommaPari = pari(somma);

// Determiniamo il vincitore
if ((sommaPari && sceltaUtente === "pari") || (!sommaPari && sceltaUtente === "dispari")) {
    console.log("Hai vinto!");
} else {
    console.log("Ha vinto il computer!");
}
