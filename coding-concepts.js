// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain: 

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: It will log "1" since the index length of "LEARN 2023" is not individually separated.
// b) Verify and explain: I was wrong. It logged "10" since the string was not in brackets.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: It will log the letter "o" 
// b) Verify and explain: It did log the letter "o" since it is at the 4th index

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: It will log "Ruby"
// b) Verify and explain: It logged "Ruby" because it is index number 1 in the array

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: It will only make "saturday" uppercase since we did not specify which index inside the array to change
// b) Verify and explain: It game me a type error because it says ".toUpperCase" is not a function but i am not sure why.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: it will log "array" since typeof will determine it is an array.
// b) Verify and explain: It logged "number" because ".length" returned the number of elements in the array. Since "4" was returned, typeof reported the value as a number
