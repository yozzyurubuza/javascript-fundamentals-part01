//Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


let aveTeamDolphinScore = (96 + 108 + 89) / 3
let aveTeamKoalasScore = (88 + 91 + 110) / 3

let getWinnerScore = 0;
const reachMinimumScore = 100;

console.log("Team Dolphins Average Score: " + aveTeamDolphinScore);
console.log(`Team Koalas Average Score: ${aveTeamKoalasScore}`);

//For Task 1 and 2

if (aveTeamDolphinScore > aveTeamKoalasScore) {
    console.log("Team Dolphin wins and gets the trophy!");
} else if (aveTeamDolphinScore < aveTeamKoalasScore) {
    console.log("Team Koala wins and gets the trophy!");
} else if (aveTeamDolphinScore === aveTeamKoalasScore) {
    console.log("It's a draw!");
}

console.log("//////////////////////////");
// For Bonus Questions

aveTeamDolphinScore = (97 + 112 + 101) / 3
aveTeamKoalasScore = (109 + 95 + 123) / 3

console.log("Team Dolphins Average Score: " + aveTeamDolphinScore);
console.log(`Team Koalas Average Score: ${aveTeamKoalasScore}`);

if (aveTeamDolphinScore > aveTeamKoalasScore) {
    getWinnerScore = aveTeamDolphinScore
    if (getWinnerScore >= reachMinimumScore) {
        console.log("Team Dolphins win and gets the trophy!");
    } else {
        console.log("Team Dolphin got a higher score, but it did not reach the Minimum Score. No team wins the trophy!")
    }
} else if (aveTeamDolphinScore < aveTeamKoalasScore) {
    getWinnerScore = aveTeamKoalasScore
    if (getWinnerScore >= reachMinimumScore) {
        console.log("Team Koalas win and gets the trophy!");
    } else {
        console.log("Team Koalas got a higher score, but it did not reach the Minimum Score. No team wins the trophy!")
    }
} else if (aveTeamDolphinScore === aveTeamKoalasScore) {
    getWinnerScore = aveTeamDolphinScore;
    if (getWinnerScore >= reachMinimumScore) {
        console.log("It's a draw!");
    } else {
        console.log("Both teams got the same score, but did not reach the minimum score. No team wins the trophy!")
    }
}

console.log("////////////////////////////")

//Jonas Schmedtmann Implementation

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy!');
// }

// BONUS 1

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy');
}




