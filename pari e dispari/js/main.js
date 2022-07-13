// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const playerChoice = prompt('scegli pari o dispari');

const playerNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));

const randomNumberResult = randomNumber(1, 5);
console.log('numero computer: ' + randomNumberResult);

const sum = playerNumber + randomNumberResult;
console.log(sum);

const oddEvenResult = oddEven(sum);

if (oddEvenResult == playerChoice) {
    alert ('Hai vinto tu!');
} else {
    alert('Ha vinto il computer!');
}



function randomNumber(min, max) {

    if (playerNumber >= 1 && playerNumber <= 5) {

        const computerNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
        console.log('numero computer: ' + computerNumber);
    
        return computerNumber;
    } else {
        alert('Inserisci un numero tra 1 e 5');
    }

}

function oddEven(numberSum) {
    
    let result;

    if (numberSum % 2 == 0) {
        result = 'pari';
    } else {
        result = 'dispari';
    }

    return result;
}