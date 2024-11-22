
let userInput = prompt("Enter a number:");
let number = parseInt(userInput);

if (number % 2 === 0) {
    alert(`The number ${number} is even.`);
} else {
    alert(`The number ${number} is odd.`);
}
number++;


alert(`After incrementing, the number is ${number}.`);