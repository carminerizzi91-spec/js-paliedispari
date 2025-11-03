// Chiedere all’utente di inserire una parola
let parola = prompt("Inserisci parola");
// Creare una funzione per capire se la parola inserita è palindroma (NON usare split, reverse e join)
function palindroma(parola) {
    let lunghezza = parola.length;
    for (let i = 0; i < lunghezza / 2; i++) {
        if (parola[i] !== parola[lunghezza - i - 1]) {
            return false;
        }

    }
    return true;
}

// Verifico se la parola è palindorma

if (palindroma(parola)) {
    console.log("La parola è palindroma")
    alert("La parola è palindroma")
} else {
    console.log("La parola non è palindroma")
    alert("La parola non è palindroma")
}