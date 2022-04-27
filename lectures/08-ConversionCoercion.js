//Type Conversion and Coercion

//Conversion = Manually change the data type
//Coercion = Javascript Automatically change the data type;

//Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear); //1991, "1991"
console.log(Number(inputYear) + 18); // 2009

console.log(Number("Jonas")); //NaN
console.log(typeof NaN); //number

console.log(String(23), 23); //"23", 23

//Type Coercion
console.log("I am " + 23 + " years old"); //"I am 23 years old"
console.log("23" - "10" - 3); // 10 - Converted into number
console.log("23" / "2"); // 11.5 - Converted into number
console.log("23" > "18"); // True - Converted into number

let n = "1" + 1; // 11 - Converted into string
n = n - 1; // 10 - Converted into number
console.log(n);
