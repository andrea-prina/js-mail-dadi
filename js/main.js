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



//* ESERCIZIO 2 - GIOCO DADI

// Generate a random number (between 1 and 6) for the player and for the computer
const playerNumber = Math.floor((Math.random() * 6) + 1);
const computerNumber = Math.floor((Math.random() * 6) + 1);

console.log(`The Player number is: ${playerNumber}`);
console.log(`The Computer number is: ${computerNumber}`);

// Check who is the winner (higher number)
if (playerNumber > computerNumber) {
    console.log("The winner is the Player!!");

} else if (playerNumber == computerNumber) {
    console.log("It's a draw!");

} else {
    console.log("The winner is the Computer!!")
}
