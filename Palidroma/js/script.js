// Funzioni
function palindromeWord(word){
    //Separo la parola inserita lettera per lettera con la proprietà .split
    const split_word = word.split("");

    //Uso la proprietà .reverse per invertire di posizione tutte le lettere
    let reverse_word = split_word.reverse();

    //Trasformo l'array di lettere in una stringa con la proprietà .join
    let join_word = reverse_word.join("");

    return join_word;
}

//Chiedere all'utente di inserire una parola ed inserirla in una variabile
let parola = prompt('Inserisci una parola');

//Confronto la stringa inserita dall'utente con quella che ritorna dalla funzione
if(parola == palindromeWord(parola)){
    console.log(`La parola ${parola} è palindroma!`);
}
else{
    console.log(`La parola ${parola} NON è palindroma!`);
}
