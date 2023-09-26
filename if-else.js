// let isCorrectGuess = false;
// const actualNumber = 3;
// const myGuess = prompt('Please enter a number between 1 and 5');

// if (myGuess == actualNumber) {
//     isCorrectGuess = true;
// }

// if (isCorrectGuess == true) {
//     console.log("Great you have entered correct number");
// } else {
//     console.log(`sorry, the actual number is ${actualNumber}`);
// }

const userLogged = true
const debitCard = true

const loggedFromGmail = false
const loggedFromEmail = true
if (userLogged && debitCard) {
    console.log("Shopping is allowed")
};
if (loggedFromEmail || loggedFromGmail) {
    console.log("login is allowed")
};
