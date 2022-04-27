/*



//The Switch Statement

const day = 'friday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

//Implementation of the example above in if-else
if (day === "monday") {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === "tuesday") {
    console.log('Prepare theory videos');
} else if (day === "wednesday" || day === "thursday") {
    console.log('Write code examples');
} else if (day === "friday") {
    console.log('Record videos');
} else if (day === "saturday" || day === "sunday") {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}



//Statements and Expressions

//Expression = produce a value / word
//Example:
// 3 + 4
// 1991
// true && false && !false

//Statement = A sequence of actions
//Example:

// if (23 > 10){
//     const str = '23 is bigger';
// }

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}.`)
*/

//The Conditional (Ternary Operator)

//Ternary Operator - an expression that can return a value similar to if else statement.

const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
