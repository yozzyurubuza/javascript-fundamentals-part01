//Basic Operators
//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah); //46, 17

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); //92, 4.6, 8
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName); //Jonas Schmedtmann

//Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 // 101
x--; // x = x -1 // 100
x--; // 99
console.log(x); //99

//Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <= //True
console.log(ageSarah >= 18); // False

const isFullAge = ageSarah >= 18; // False

console.log(now - 1991 > now - 2018); // 46 > 19 = True
