//Strings and Template Literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas); //I'm Jonas, a 46 years old teacher!

//Template Literal - Assemble multiple pieces into one final string

const jonasNew = `I'm ${firstName}, ${year - birthYear} year old ${job}!`;
console.log(jonasNew); //I'm Jonas, 46 year old teacher!

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

// String with
// multiple
// lines

console.log(`String
multiple
lines`);

// String with
// multiple
// lines
