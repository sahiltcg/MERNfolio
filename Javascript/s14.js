// Write a function that takes an array of numbers and returns a new array with only the even numbers.

// let arr = [1,2,3,4,5,6,7,8]

// let even = arr.filter((arr) => arr%2 ==0)

let even = (...arr) => {
    let mod = arr.filter((arr) => arr%2===0)
    let sort = mod.sort((a, b) => b-a)
    console.log("This is the sorted array: ",sort);
     
}

even(12, 45, 67, 8, 34, 23, 90, 11, 56, 78)
even(3, 17, 22, 49, 88, 14, 65, 37, 91, 2)
even(42, 76, 15, 8, 33, 57, 19, 99, 61, 10)
even(25, 84, 7, 63, 40, 11, 93, 18, 70, 29)
