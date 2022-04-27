//Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

// True and True = True
console.log(hasDriversLicense && hasGoodVision);
// True or True = True
console.log(hasDriversLicense || hasGoodVision);
// !True = False
console.log(!hasDriversLicense);

console.log("Condition A and B only: ");
if (hasDriversLicense && hasGoodVision) {
  // if (True)
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false; // C

//True and True and False = false
//One false condition with && operator makes the whole equation false
console.log(hasDriversLicense && hasGoodVision && isTired); // False

console.log("Conditions A, B, and C: ");
//if (True and True and !False(True) = True)
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
