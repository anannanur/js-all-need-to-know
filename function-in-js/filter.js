var arr = [2, 8, 5, 4, 7, 9, 3, 1]

// var newArr = arr.filter(function (value, index, array) {
//     // return value%2 === 0
//     // return value%2 === 1
//     return value > 5
// })
// console.log(newArr)

function myFilter(arr,cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if(cb(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(myFilter(arr, function(value){
    return value % 2 ===0
}))
console.log(myFilter(arr, function(value){
    return value % 2 ===1
}))
console.log(myFilter(arr, function(value){
    return value >4 
}))