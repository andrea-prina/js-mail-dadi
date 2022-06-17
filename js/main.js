//* ESERCIZIO 1 - MAIL

// Mailing list to check the user input
const mailingList = [
    "andrea@ecorp.com", "federica@ecorp.com", "davide@ecorp.com", "alessandro@ecorp.com", "aurora@ecorp.com", 
    "giorgio@ecorp.com", "letizia@ecorp.com", "massimo@ecorp.com", "rossana@ecorp.com", "luigi@ecorp.com"
];

// Request the user to input his email and save to a variable to check if it's in the mailing list
const userInputMail = prompt("Inserisci il tuo indirizzo email");

// Create a dummy variable to be valorized with "True" if the user mail is in the mailing list
let mailCheck = false;

// Confront the mail inputted by the user with each one present in the mailing list
// If there is a match, set mailCheck variable to True
for (let i = 0; i < mailingList.length; i++) {
    if (userInputMail == mailingList[i]) {
        mailCheck = true;
    }
}

// Print the proper message according to the value of the mailCheck variable
if (mailCheck === true) {
    console.log("Accesso consentito!");
} else {
    console.log('L\'indirizzo inserito non è presente a sistema');
}






// Gioco dei dadi (separatemente)
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.