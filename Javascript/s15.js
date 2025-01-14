// Use `map()` to double all the elements in an array.

function double(...arr){
    let dub = arr.map((x)=> x*2)
    console.log("Double of the elemets of this array: ",dub);
    
}

double(2,3,4)
double(5, 8, 2, 1, 9, 4)
double(3, 17, 22, 49, 88, 14, 65, 37, 91, 2)
double(12, 45, 67, 8, 34, 23, 90, 11, 56, 78)
