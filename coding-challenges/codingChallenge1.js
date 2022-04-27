//Coding Challenge #1 - After lectures 01-05

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

//Test Data 1
const markWeight_1 = 78;
const markHeight_1 = 1.69;

const johnWeight_1 = 92;
const johnHeight_1 = 1.95;

const getMarkBMI_1 = markWeight_1 / markHeight_1 ** 2;
const getJohnBMI_1 = johnWeight_1 / johnHeight_1 ** 2;

let markHigherBMI = getMarkBMI_1 > getJohnBMI_1;

console.log("Mark's BMI: " + getMarkBMI_1 + "kg/m^2");
console.log("John's BMI: " + getJohnBMI_1 + "kg/m^2");
console.log("Is Mark's BMI higher than John?: " + markHigherBMI);

//Test Data 2
const markWeight_2 = 95;
const markHeight_2 = 1.88;

const johnWeight_2 = 85;
const johnHeight_2 = 1.76;

const getMarkBMI_2 = markWeight_2 / markHeight_2 ** 2;
const getJohnBMI_2 = johnWeight_2 / johnHeight_2 ** 2;

markHigherBMI = getMarkBMI_2 > getJohnBMI_2;

console.log("Mark's BMI: " + getMarkBMI_2 + "kg/m^2");
console.log("John's BMI: " + getJohnBMI_2 + "kg/m^2");
console.log("Is Mark's BMI higher than John?: " + markHigherBMI);

//Jonas Schmedtmann Implementation
//For Test Data 2, just change the value in the const variables

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);
