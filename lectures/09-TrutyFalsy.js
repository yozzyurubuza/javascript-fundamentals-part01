//Truthy and Falsy Values

// 5 Falsy values: 0, '', undefined, null, NaN

//Using Boolean() just checks if the value is true or false, does not convert the data type into Boolean.

console.log(Boolean(0)); //False
console.log(Boolean(undefined)); //False
console.log(Boolean("Jonas")); //True
console.log(Boolean({})); //True
console.log(Boolean("")); //False

const money = 0;

//if (false)
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 0;

//if (false)
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
