// Inizio Funzioni

// Creo una funzione per generare un numero random tra 1 e 5 per il computer
function randomNumberComputer(){
    let randomNumber = Math.floor(Math.random() * 5 + 1);
    return randomNumber;
}

// Creo una funzione per stabilire se il numero è pari o dispari
function pariDispari(num){
    if(num % 2 === 0){
        return 'pari';
    }
    else{
        return 'dispari';
    }
}
//Fine funzioni

// Chiedere all'utente di scegliere pari o dispari
let pari_dispari_user = prompt('Scrivi pari o dispari');

// Chiedere all'utente di inserire un numero da 1 a 5
let number = parseInt(prompt('Inserisci un numero compreso tra 1 e 5'));

// Sommo il numero inserito dall'utente e quello casuale del computer
let number_computer = randomNumberComputer();

let somma = number + number_computer;

// controllo la stringa inserita dall'utente con quella che ritorna dalla funzione
if(pariDispari(somma) == pari_dispari_user){
    console.log(`La somma dei numeri è ${pariDispari(somma)}. Hai vinto!`);
}
else{
    console.log(`La somma dei numeri è ${pariDispari(somma)}. Hai perso!`);
}