// let fact = 20
// const val = fact
// for(let i = 1;i<val;i++){
//     fact = i * fact
// }

let fact = (num) => {
    const val = num
    for(let i = 1;i<val;i++){
        num = num * i
    }
    return (`The factorial of ${val} is ${num}`)
}


console.log(fact(9));
console.log(fact(8));
console.log(fact(12));
console.log(fact(6));

