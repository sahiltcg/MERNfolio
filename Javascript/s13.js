// Create a function that generates a random number between a given range.

// let max = 30
// let min = 20

// let result = max - min

// let num = Math.floor(Math.random()*result)

// let final = min + num

// console.log(final);

function randomNum(min,max){
    let diff = max - min
    let num = Math.floor(Math.random()*diff)
    let final = min + num
    return final
}
