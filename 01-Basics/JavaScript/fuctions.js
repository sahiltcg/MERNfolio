// Let's study functions in Javascript...

// => Functions help us repeat the same block of code multiple times.

// Syntax =>

    // function name(params) {
        
    // }



// function sum(num1, num2){
// //    let num1;
// //    let num2;

//     console.log("The total is: ", num1 + num2);
// }

// sum(12, 23);
// sum(42, 21);
// sum(45, 28);
// sum(3245, 2128);
// sum(4512, 232);


// function sum(var1, var2){
//     let result = var1+var2;
//     return result;
// }

// let add = sum(12, 34);
// console.log(add);

// Calculator =>

function sum(var1, var2){
    let result = var1+var2;
    return result;
}
function minus(var1, var2){
    let result = var1-var2;
    return result;
}
function multi(var1, var2){
    let result = var1*var2;
    return result;
}
function divide(var1, var2){
    let result = var1/var2;
    return result;
}
function mod(var1, var2){
    let result = var1%var2;
    return result;
}

let add = sum(34, 12);
console.log("Sum: ", add);

let subtract = minus(34, 12);
console.log("Difference: ", subtract);

let product = multi(34, 12);
console.log("Product: ", product);

let rimender = divide(34, 12);
console.log("rimender: ", rimender);

let modi = sum(34, 12);
console.log("Modulos: ", modi);