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

// const book = new Object(); // constructor based syntex

// book.title = "Atomic Habits";
// book.author = "Sahil";
// book.yearPublished = 2020;

// console.log(book);


// Object Inheritence

// const powers = {
//     fly: true,
//     coordinate: Math.random() + 1
// }

// const superhero = Object.create(powers);
// console.log(superhero) // No output will be shown as the powers object will be add to the prototype of the superhero obejct.
// console.log(superhero.coordinate) // The values of the prototype object can be accessed using this
// console.log(Object.getPrototypeOf(superhero)) // The will show all the inhertied properties of powers object


// Getters and Setters in JS

// const library = Object.create({});
// Object.defineProperty(library, 'book',{
//     // icon: '📘',
//     get: () => '📘',
//     enumerable: true
// })
// The above declaration of object is by default not enumerable we have to turn the enumerable flag ture in order to enumerate the object using any loop.




// console.log("This is library object: ", library)
// console.log("This is the element of Library: ", library.book)
// console.log("This is the values in the prototype of the library object: " , Object.getPrototypeOf(library))


// for (const key in library) {
//     console.log("The value is: ", key);
    
// }