// let sahil = {
//     name: "Sahil",
//     age: 22,
//     city: "Delhi",
//     courseName: [],
//     addCourse: function(courseName) {
//         this.courseName.push(courseName);
//     },
//     getCourseCount: function() {
//         return `${this.name} is enrolled in total of ${this.courseName.length} courses`;
//     }
// }

// sahil.addCourse("JavaScript");
// sahil.addCourse("React");
// sahil.addCourse("NodeJS");
// console.log(sahil.getCourseCount());
// console.log(sahil);

// let countries = ["India", "USA", "Japan", "Russia", "China", "Pakistan", "Nepal"];

// const count = countries.filter((country) => country.includes("i"));
// console.log(count);

setTimeout(() => {
    console.log("This is setTimeout function");
}, 3000);

setInterval(() => {
    console.log("This is setInterval function");
}, 2000);