//Task 1: 
let fruits = ["apple", "banana", "cherry"];

fruits.push("orange");
fruits.shift();
fruits.unshift("grape");

console.log(fruits);

//Task 2:
let colors = ["red", "blue", "green", "blue", "yellow"];


let ifIncludes = colors.includes("blue");
let firstIndex = colors.indexOf("blue");
let lastIndex = colors.lastIndexOf("blue");

console.log([ifIncludes, firstIndex, lastIndex]);

//Task 3:
let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];

let allTeams = teamA.concat(teamB);
allTeams.push("Eve");

console.log(allTeams);

//Task 4:
let numbers = [10, 20, 30, 40, 50];
let middleNumbers = numbers.slice(1,3);
numbers.splice(3,4,60, 70);

console.log("middleNumbers: ", middleNumbers);
console.log("numbers: ", numbers);

//Task 5:
let scores = [85, 70, 95, 60, 75];
let sortedScores = scores.sort((a, b) => a - b);

console.log(sortedScores);

let reversedScores = scores.sort((a, b) => a - b).reverse();
console.log(reversedScores);
