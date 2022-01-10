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
