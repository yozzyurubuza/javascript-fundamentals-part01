//Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

//Test Data 1
const markWeight_1 = 78;
const markHeight_1 = 1.69;

const johnWeight_1 = 92;
const johnHeight_1 = 1.95;

const getMarkBMI_1 = markWeight_1 / markHeight_1 ** 2
const getJohnBMI_1 = johnWeight_1 / johnHeight_1 ** 2

let markHigherBMI = getMarkBMI_1 > getJohnBMI_1;

console.log("Mark's BMI: " + getMarkBMI_1 + "kg/m^2");
console.log("John's BMI: " + getJohnBMI_1 + "kg/m^2");
console.log("Is Mark's BMI higher than John?: " + markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI (${getMarkBMI_1}) is higher than John's! (${getJohnBMI_1})`);
} else {
    console.log(`John's BMI (${getJohnBMI_1}) is higher than Mark's! (${getMarkBMI_1})`);
}


//Test Data 2
const markWeight_2 = 95;
const markHeight_2 = 1.88;

const johnWeight_2 = 85;
const johnHeight_2 = 1.76;

const getMarkBMI_2 = markWeight_2 / (markHeight_2 * markHeight_2)
const getJohnBMI_2 = johnWeight_2 / (johnHeight_2 * johnHeight_2)

markHigherBMI = getMarkBMI_2 > getJohnBMI_2;

console.log("Mark's BMI: " + getMarkBMI_2 + "kg/m^2");
console.log("John's BMI: " + getJohnBMI_2 + "kg/m^2");
console.log("Is Mark's BMI higher than John?: " + markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI (${getMarkBMI_2}) is higher than John's! (${getJohnBMI_2})`);
} else {
    console.log(`John's BMI (${getJohnBMI_2}) is higher than Mark's! (${getMarkBMI_2})`);
}

//Jonas Schmedtmann Implementation


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
// }



