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

let pari_dispari_user;
let number;
let number_computer;
let somma;

let button_verify = document.getElementById('button-verify');
let user_verify = document.getElementById('user-verify');

button_verify.addEventListener('click', function(){
    
    pari_dispari_user = document.getElementById('pari-dispari-user').value;
    number = document.getElementById('number-user').value;
    
    number_computer = randomNumberComputer();
    
    somma = number + number_computer;
    
    if(pariDispari(somma) == pari_dispari_user){
        user_verify.innerHTML = `La somma dei numeri è ${pariDispari(somma)}. Hai vinto!`;
    }
    else{
        user_verify.innerHTML = `La somma dei numeri è ${pariDispari(somma)}. Hai perso!`;
    }

    console.log(pariDispari(somma));
});
