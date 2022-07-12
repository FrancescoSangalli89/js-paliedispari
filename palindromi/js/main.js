// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// chiedo una parola all'utente
// separo la parola in lettere e creo un array
// scorro l'array
// scorro l'array all'inverso
// se array = arrayRev la parola è palindroma



const wordUser = prompt('inserisci una parola e ti dirò se è palindroma');
const palindromeCheckExecut = palindromeCheck(wordUser);


function palindromeCheck(word) {


    let palindrome ;

    let letters = word.split('').join().toLowerCase();
    console.log('letters =' + letters);
    console.log('letters =' + typeof letters);
    

    let lettersRev = word.split('').reverse().join().toLowerCase();
    console.log('lettersRev =' + lettersRev);
    console.log('lettersRev =' + typeof lettersRev);

    if (letters == lettersRev) {
        alert('è palindroma');
        palindrome = true;
    } else {
        alert ('non è palindroma');
        palindrome = false;
    }

    return palindrome;


}