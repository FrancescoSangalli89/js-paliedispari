// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// chiedo una parola all'utente
// separo la parola in lettere e creo un array
// scorro l'array
// scorro l'array all'inverso
// se array = arrayRev la parola è palindroma



let wordUser = prompt('inserisci una parola e ti dirò se è palindroma');

wordUser= wordUser.replaceAll(' ', '').toLowerCase();

// const palindromeCheckExecut = palindromeCheck(wordUser);

// function palindromeCheck(word) {

//     let palindrome ;

//     let letters = word.split('').join().toLowerCase();
//     console.log('letters =' + letters);
//     console.log('letters =' + typeof letters);
    

//     let lettersRev = word.split('').reverse().join().toLowerCase();
//     console.log('lettersRev =' + lettersRev);
//     console.log('lettersRev =' + typeof lettersRev);

//     if (letters == lettersRev) {
//         palindrome = true;
//     } else {
//         palindrome = false;
//     }

//     return palindrome;

// }

const palindromeCheckExecut = palindromeCheck(wordUser);

function palindromeCheck(word) {
    let reverseWord = '';
    // let palindrome ;

    // let array = '';
    // let arrayRev = '';

    // for(let f = 0; f < word.length; f++) {
    //     console.log(word[f]);
    //     array = word[f];
    // }

    for (let r = word.length -1; r >= 0 ; r--) {
        console.log(word[r]);
        reverseWord += word[r];
    }

    // if (array == arrayRev) {
    //     palindrome = true;
    // } else {
    //     palindrome = false;
    // }

    return reverseWord;

} 

if (palindromeCheckExecut == wordUser) {
    alert('è palindroma');
} else {
    alert('non è palindroma');
}