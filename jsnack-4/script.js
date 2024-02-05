// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero
// successivo.

let numeroUtente = parseInt(prompt("inserisci un numero"));

for (let i = 0; i != 1; i++){

    if (numeroUtente % 2 === 0){
        console.log("il numero inserito dall'utente è pari:" + numeroUtente)
    } else {
        console.log("il numero inserito dall'utente è dispari, quindi il numero successivo è:", numeroUtente + 1)
    }
}