// Exercise 1: Applying Array.prototype.map()
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63]

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const nums2 = nums.map((num) => {
  return num * 2
})

console.log('Ex.1: ', nums2)

// Exercise 2: Array destructuring
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

let pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']

// Your code here
const [firstTopping, secondTopping] = pizzaToppings

console.log('Ex.2-1st:', firstTopping)
console.log('Ex.2-2nd:', secondTopping)

// Exercise 3: Destructuring objects
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

let car = {
  make: 'Audi',
  model: 'q5'
}

// Your code here
const { make, model } = car

console.log('Ex.3-make:', make)
console.log('Ex.3-modal:', model)

// Exercise 4: Applying the spread operator on arrays
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']

// Your code here
const controversialPizzaToppings = [...pizzaToppings]

console.log('Ex.4 - Copied array: ', controversialPizzaToppings)

// Exercise 5: Applying the spread operator on objects
// Duplicate the following object and spread its values into a new variable `myCar`.

/* const car = {
  make: 'Audi',
  model: 'q5'
} */

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

const myCar = { ...car }
myCar.model = 'q7'

console.log('Ex.5 - car', car)
console.log('Ex.5 - myCar', myCar)

// Exercise 6: Dynamic keys in objects
// Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const userProfile = {
  username: 'Salman',
  age: '38',
  email: 'sjs29@hotmail.com'
}

const propertyName = 'username'
console.log('Ex.6 "username": ', userProfile[propertyName])

// Exercise 7: Import and Export (separated files)
console.log('Ex.7: -- separated files done')

// Exercise 8: Default parameters
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
const nounAdjective = (noun = 'cat', adjective = 'white') => {
  console.log('Ex.8: ', `The ${noun} is ${adjective}`)
}

nounAdjective()
nounAdjective('car', 'red')

// Exercise 9: Ternary operator
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty'

/* if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
} */

// Your code here
console.log('Ex.9: ', pizza === 'tasty' ? 'yum' : 'yuck')

// Exercise 10: Boolean gates
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement:

// "LANG is equal to localLangConfig or the default value of English."
const localLangConfig = null // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || 'en'
// Log the result
console.log('Ex.10-1: ', 'Language setting:', LANG)

// 2. SET WEBSITE THEME

const userSavedTheme = null // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || 'light'
// Log the result
console.log('Ex.10-2: ', 'User theme setting:', USER_THEME)

// Exercise 11: Optional chaining
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice'
}

let cat // Your code here
cat = adventurer.cat?.age
console.log('Ex.11: ', cat)
