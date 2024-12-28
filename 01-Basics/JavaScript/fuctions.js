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

// function sum(var1, var2){
//     let result = var1+var2;
//     return result;
// }
// function minus(var1, var2){
//     let result = var1-var2;
//     return result;
// }
// function multi(var1, var2){
//     let result = var1*var2;
//     return result;
// }
// function divide(var1, var2){
//     let result = var1/var2;
//     return result;
// }
// function mod(var1, var2){
//     let result = var1%var2;
//     return result;
// }

// let add = sum(34, 12);
// console.log("Sum: ", add);

// let subtract = minus(34, 12);
// console.log("Difference: ", subtract);

// let product = multi(34, 12);
// console.log("Product: ", product);

// let rimender = divide(34, 12);
// console.log("rimender: ", rimender);

// let modi = sum(34, 12);
// console.log("Modulos: ", modi);

// We can pass and add strings also in functions:

// function URL(url, domain){
//     let con = "https://";
//     let result = con + url + domain;
//     return result;
// }

// console.log("The site is: ",URL('sahilahmd','.me'));
// // The above will give the desired result but it is not considerd a good practice.

// let site = URL('sahilahmed','.me');
// console.log("The site is: ",site);
// The above decration is considered as a good practice.

// Both the outputs will be same.

// Passing an array in a function

// Adding the elements of an Array

function sum(arr){
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

let array = [1,2,3,4,5,6,7,8,9];
let sumarray = sum(array);

console.log("The sum of the elements of an Array is: ", sumarray);