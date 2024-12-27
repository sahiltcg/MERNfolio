// Methods in Array

// Array.from

// let a = "sahil";
// console.log(Array.from(a));
// => It creates array from an array like objects.

// Array.isArray

// let a = ["sahil", "raju", "jethalal", "spiderman", "panda"];
// let b = "I'm coding";

// if(Array.isArray(a) == true){
//     console.log(`The element "a" is an array`);
// }else{
//     console.log(`The element "a" is not array`)
// }

// if(Array.isArray(b) == true){
//     console.log(`The element "b" is an array`);
// }else{
//     console.log(`The element "b" is not array`)
// }

// Concat

// let abc = ["sahil", "gamer", "PUBG", "HaCkEr", "Ge3k"];
// let bcd = [2,4,5,1,4,5];

// console.log("This is first array: ", abc);
// console.log("This is second array: ", bcd);
// console.log("This is merged array: ",abc.concat(bcd));

// Entries
// let asd = [1,2,3,4,5,6,7,8,9];

// let itrator = asd.entries();

// for(i=0;i<9;i++){
//     console.log("Array: ",itrator.next().value);
// }

// at
// let asd = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let index = 2;
// console.log(`The array at index ${index} is ${asd.at(index)}`);


// findIndex
// let asd = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let number = (element) => element > 5;
// console.log(asd.findIndex(number));

// Push
// let asd = [1, 2, 3, 4, 5];
// let i = 0;
// while(i<19){
//     let last = asd[asd.length - 1];
//     asd.push(last+1)
//     i++;
// }
// console.log(asd);


// Pop
// let asd = [1, 2, 3, 4, 5];
// let i = 0;
// while(i<=4){
//     asd.pop();
//     let last = asd[asd.length - 2];
//     asd.push(last+1)
//     i++;
//     console.log(asd);
// }


// Shift
// let asd = [1, 2, 3, 4, 5];
// console.log("Array before: ", asd);
// for(i=0;i<5;i++){
//     console.log(`This array: ${asd.shift()}`);
// }
// // console.log(asd.shift());
// console.log("Array after: ", asd);


// reverse() => It reverses an Array
// let asd = [1, 2, 3, 4, 5];
// console.log(asd.reverse());

// sort()
// let itBe = [2,5,1,4,7,8,3,4];
// console.log("Original Array: ",itBe);
// console.log("Sorted Array: ",itBe.sort());

