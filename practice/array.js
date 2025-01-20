// Array filter

const arr = ['sahil','rahil','kulsum','saba','nazneen','rafiya']

// To check, if the array includes something 
const inc = arr.filter((item)=> item.includes("s"));
// console.log(inc);

// To check, if the array contens any word greate then the given lenght
const lenght = arr.filter((item)=> item.length >= 5)
// console.log(lenght);


// Checkig if the number is even or not using Array filter method
let num = [1,2,3,4,5,6,7,8,9]
let evenNumbers = num.filter((item)=> item % 2 === 0)
// console.log(evenNumbers);


// Filtering by Object Property

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'John', age: 45 },
    { name: 'Sam', age: 54 },
];

const userfilter = users.filter((user)=> user.name.length < 5)
// console.log(userfilter);


// Removing null or undifined values

const values = [1,null,2,3,null,4,5,null,6,7,null]

const newval = values.filter((num)=>{
    return (num % 2 == 0 && num != null);
})

console.log(newval);

