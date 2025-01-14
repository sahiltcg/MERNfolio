// Sum of all the elements in an array

// let arr = [1,2,3,4,5,6,7,8,9]

arrSum(1,2,3,4,5,6,7,8,9)
arrSum(23,4,121213,243,53,212)
arrSum(32,43,6,214,566,334,43,54,34,5323,23)
arrSum(56,67,34,23,65,76)
arrSum(12,32,4,36,57687,97)


function arrSum(...arr){
    let sum = 0
    for(let i = 0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    console.log("The sum of this array is: ",sum);
}

