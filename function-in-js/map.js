var arr = [1,2,3]

// var res = arr.map(function(value,index,array){
//     return value* value
// })
// console.log(res)
// output [ 1,4,9]

function myMap(arr, cb){
    var arr2 = []
    for(var i = 0 ; i < arr.length; i++){
        var temp = cb(arr[i],i,arr)
        arr2.push(temp)
    }
    console.log(arr2)
}
myMap(arr, function(value,index,array){
    // return value * 3
    // output [3,6,9]
    return value * value
    //output [1,4,9]
})