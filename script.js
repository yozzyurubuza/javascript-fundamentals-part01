/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
let firstNamePerson //Camel Case - Javascript naming standard

console.log(firstName);
console.log(firstName);
console.log(firstName);

//let jonas&matilda = 'JM'; // Some special characters cannot be used.
//let new = 27; //Reserved javascript keyword cannot be used
let $function = 27;

let Person = 'jonas' //Avoid using uppercase in the start of variable names

//write variable names descriptively
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);


//Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

//typeof displays the data type
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

//Dynamic Typing - Makes the changes in data type easily by changing the value of the variable.

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

//let, const, and var use cases
//let - use to mutate the value for later use
let age = 30;
age = 31;

//const - variable value cannot be changed / immutable variable
const birthYear = 1991
// birthYear = 1990

// const job;

//var - legacy code, almost same function with let.
var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);


//Basic Operators
//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x -1
x--;
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

//Operator Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

//console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);






















