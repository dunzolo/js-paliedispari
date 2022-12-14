// Funzioni
function palindromeWord(word){
    //Separo la parola inserita lettera per lettera con la proprietà .split
    // const split_word = word.split("");

    //Uso la proprietà .reverse per invertire di posizione tutte le lettere
    // let reverse_word = split_word.reverse();

    //Trasformo l'array di lettere in una stringa con la proprietà .join
    // let join_word = reverse_word.join("");

    let new_word = word.split("").reverse().join("");

    return new_word.toLowerCase();
}

//Chiedere all'utente di inserire una parola ed inserirla in una variabile
let parola = prompt('Inserisci una parola').toLowerCase();

//Recupero il valore della funzione
let new_word = palindromeWord(parola);

//Confronto la stringa inserita dall'utente con quella che ritorna dalla funzione
if(parola == new_word){
    console.log(`La parola ${parola} è palindroma!`);
}
else{
    console.log(`La parola ${parola} NON è palindroma!`);
}
