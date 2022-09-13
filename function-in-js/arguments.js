// var arr1 = [1,2,3]
// var arr2 = [4,5,6]
// var arr3 = [7,8,9]


// function sumOfArray(arr){
//     var sum = 0
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)

function test(a, b, c) {
    // console.log(arguments)
    // console.log(JSON.stringify(arguments))
    // arguement is a js-obj
    // argument is a array like data structure
}
test()

function test1(a, b, c) {
    // console.log(arguments)
}
test1(10, 20, 30)

// output - [Arguments] { '0': 10, '1': 20, '2': 30 }

function test2(a, b, c) {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}
test2(10, 20, 30)

function addAll() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}

addAll(2,3,4,1)


