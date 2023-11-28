// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

const padresRunsCombined = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

console.log(padresRunsCombined.length)
// Expected output: 9

// Pseudo code: 

// Input: Two arrays

// Output: Index length of the two arrays combined

// Process:
// Evaluated the two lengths
// Read the syllabus to remember how to use concat in order to combine the two arrays
// Tried to console log the variable declaration "padresRunsCombined" but it showed each individual number inside of the arrays.
// Got the index length of the combined array using the conditional statement .lenght
// Console logged the updated code and it gave the correct output.


// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023" 

let reversedCurrentCohort = []
    for (let i = currentCohort.length - 1 ; i >= 0 ; i--)
    reversedCurrentCohort += currentCohort[i]

console.log(reversedCurrentCohort)
// Expected output: "3202 NRAEL"

// Pseudo code:

// Input: A string of mumbers and letters
// 
// Output: Reversed string of the original numbers and letters
// 
// Process: 
// Declared a variable with an empty string. Like an empty tupperware according to the lecture.
// Started a for loop but it did not work since terminal was displaying undefined3202 NRAEL. 
// Used the conditional statement .length so it would start at the end of the string like in the lecture video.
// Tried to use curly braces to encapsulate each individual problem but I kept getting SyntaxError: Unexpected token

// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
    for (let i = 0 ; i < stockExchange.length ; i++)
    if (stockExchange[i] % 2 !== 0)
    console.log(stockExchange[i])

// Expected output: 13 5 -5 27

// Pseudo code:

// Input: An array of numbers
// Output: An array of odd numbers
// Process:
// Copied code from challenge number two put made it so that each iteration the number went up by 1 instead of going down
// Used a for loop to verify if a number is odd by making it dividible by 2 in the if condition.
// Code worked but I still get a syntax error when I use curly braces
// 
