var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.forEach(function(value,index,array){
//     console.log(value,index,array)
// })


function forEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i],i,arr)
    }
}
var sum = 0;
forEach(arr,function(value){
    return sum += value
    
})
console.log(sum)

forEach(arr,function(value,index,array){
    array[index] = value + 5
})
console.log(arr)