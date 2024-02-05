// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array
// che ha meno elementi fino a quando ne avrà tanti quanti l’altro. (Se iniziate con un
// array da 3 elementi e l'altro da 5, eseguite istruzioni sinchè non ne hanno entrambi 5

const cortoArray = [1, 2, 3, 4];
const lungoArray = [5, 6, 7, 8, 9, 10];
const minimoLenght = Math.min(cortoArray.length, lungoArray.length);

for( let i = 0; i < minimoLenght; i++) {

    if (cortoArray.length < lungoArray.length) {
        cortoArray.push(0);
    } else {
        lungoArray.push(0);
    }
}

console.log("Primo Array:", cortoArray);
console.log("secondo Array:", lungoArray);