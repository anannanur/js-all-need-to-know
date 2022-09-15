var arr = [3, 2, 1, 8, 9, 5, 6, 7]

var result = arr.find(function(value){
    return value === 9
})
console.log(result)

var result = arr.findIndex(function(value){
    return value === 9
})
console.log(result)

//find implementation
function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if(cb(arr[i])){
            return arr[i]
        }
    }
}

var result = myFind(arr, function(value){
    return value === 8;
})

console.log(result)

// findIndex implementation
function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if(cb(arr[i])){
            return i
        }
    }
}

var result = myFind(arr, function(value){
    return value === 8;
})

console.log(result)








