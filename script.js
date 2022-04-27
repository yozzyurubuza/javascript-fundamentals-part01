/*


//Equality Operators: == vs ===

// == does type coercion while === does not.

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
    console.log('Cool! 23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?')


//Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision && isTired);


if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}


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
