//Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

//typeof displays the data type
console.log(typeof true); //boolean
console.log(typeof javascriptIsFun); //boolean
console.log(typeof 23); //number
console.log(typeof "Jonas"); //string

//Dynamic Typing - Makes the changes in data type easily by changing the value of the variable.

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); //string

let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 1991;
console.log(typeof year); //number

console.log(typeof null);
