// Array filter

const arr = ['sahil','rahil','kulsum','saba','nazneen','rafiya']

// To check, if the array includes something 
const inc = arr.filter((item)=> item.includes("s"));
// console.log(inc);

// To check, if the array contens any word greate then the given lenght
const lenght = arr.filter((item)=> item.length >= 5)
console.log(lenght);
