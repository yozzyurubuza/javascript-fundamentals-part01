//let, const, and var use cases
//let - use to mutate the value for later use
let age = 30;
age = 31;
console.log(age); //31

//const - variable value cannot be changed / immutable variable
const birthYear = 1991;
// birthYear = 1990 - error

// const job;

//var - legacy code, almost same function with let.
var job = "programmer";
job = "teacher";

//Without putting let or const, var will be used as a default
lastName = "Schmedtmann"; // var

console.log(lastName);
