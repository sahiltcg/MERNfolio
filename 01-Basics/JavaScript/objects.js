// Objects in JS

// Exercise 1 - Basic

// let person = {
//     name: "Sahil",
//     age: 24,
//     city: "Bhilwara"
// }

// person["hobby"] = "Coding"
// person.city = "Jaipur"

// delete person.age

// console.log(person)

// Exercise 1 - Basic (Nested Objects)

// let student = {
//     name: 'Sahil',
//     grade: 12,
//     address: {
//         street: 'Gulshan Nagar',
//         city: 'bhilwara',
//         zipCode: 311001
//     }
// }

// let cityname = student.address.city

// console.log(cityname)

// let stuname = student["name"]

// console.log(stuname)


// Exercise 2 - Intermediate 

// Iterating Through an Object

// let student = {
//     name: 'Sahil',
//     grade: 12,
//     address: {
//         street: 'Gulshan Nagar',
//         city: 'bhilwara',
//         zipCode: 311001
//     }
// }

// for (let x in student){
//     console.log(x + ": " + student[x])
// }


// Dynamic Keys

// => Create an empty object book.
// => Dynamically add properties like title, author, and yearPublished using variables.

const book = new Object()

book.title = "Atomic Habits"
book.author = "Sahil"
book.yearPublished = 2020

console.log(book)
