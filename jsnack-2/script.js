// Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero.
// Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure
// "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è
// perfettamente uguale al numero estratto in modo casuale.
// Quando l'utente trova il numero, fateglielo sapere!

// funzione per numero randomico
function RandomNumber (min, max) {
    return Math.floor (Math.random()*(max-min +1) +min)
}

let numeroRandom = RandomNumber (1,100)

let numeroUtente = 0

while (numeroUtente !== numeroRandom) {

    numeroUtente = parseInt(prompt("indovinail numero tra 1 e 100"));

    if (numeroUtente > numeroRandom) {
        console.log('il numero è troppo alto');
        alert ("il numero è piu alto! prova di nuovo!");
    } else if (numeroUtente < numeroRandom) {
        console.log('il numero è troppo basso');
        alert ("il numero è piu basso! prova di nuovo!");
    } else {
        console.log('hai indovinato il numero!');
        alert ("hai indovinato il numero!!!")
    }
        
}