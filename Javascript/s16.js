// Find the largest element in an array using the `reduce()` method.

function largest(...arr){
    let max = arr.reduce((accumulator, current)=> {
       return current>accumulator?current:accumulator;}
       ,arr[0])
    return max
}

console.log(largest(5,56,4,3,32,64,6));