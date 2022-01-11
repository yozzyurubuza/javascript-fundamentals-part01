//Assignment for Javascript Fundamentals Part - 1
//Lecture: Values and Variables

const country = "Philippines";
const continent = "Asia";
let population = 1;

console.log(country);
console.log(continent);
console.log(population);

console.log("////////////////////");
//Lecture: Data Types
const isIsland = false;
let language;

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);
console.log("////////////////////");
//Lecture: let, const, and var
language = "Tagalog";
//isIsland = true; - error

console.log("////////////////////");
//Lecture: Basic Operators
const splitCountry = population / 2;
console.log(population + 1);
const finlandPopulation = 6;
const isFinlandPopulationHigher = finlandPopulation > population;
const averagePopulation = 33;
const isCountryPopulationLessAverage = population < 33;
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

console.log("////////////////////");
//Strings and Template Literals
const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description2);

//Taking Decisions: if / else statements

// const countryPopulation =
//   population > averagePopulation
//     ? `${country}'s population is above average`
//     : `${country}'s population is ${
//         averagePopulation - population
//       } million below average`;

// console.log(countryPopulation);

if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - population
    } million below average`
  );
}

// population = 13
// population = 130
console.log("////////////////////");
//Type Conversion and Coercion

/*
1. Predict the result of these 5 operations without executing them:
'9' - '5'; = 4
'19' - '13' + '17'; = 617
'19' - '13' + 17; = 23
'123' < 57; = False
5 + 6 + '4' + 9 - 4 - 2; = 1143
*/
//Note: Last Coerced data type will be the current

console.log(5 + 6 + "4" + 9 - 4 - 2);
console.log("////////////////////");
//Equality Operators: == vs ===

// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );

// const numNeighbours = Number(prompt(
//     "How many neighbour countries does your country have?"
//   ));

// if (numNeighbours === 1) {
//   console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders!");
// }

//When using prompt, input is a string and == coerced it into a number, while using strict will not coerce the string 1 into number, so it goes to the else block. Placing prompt() inside Number() converts the input into a number
console.log("////////////////////");
//Logical Operators

// language = "english";

const newCountry =
  language == "english" && population < 50
    ? console.log(`You should live in ${country} :)`)
    : console.log(`${country} does not meet your criteria :(`);

console.log("////////////////////");
//The Switch Statement

// language = prompt("What language do you use?");

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

console.log("////////////////////");
//The Conditional (Ternary) Operator

// population = 130;

population =
  population > 33
    ? console.log(`${country}'s population is above average`)
    : console.log(`${country}'s population is below average`);

// console.log(
//   `${country}'s population is ${population > 33 ? "above" : "below"} average`
// );

console.log("////////////////////");
