// What is first class function?

function add(a,b){
    return a+b;
}

// It can be stored in a variable
var sum = add;
console.log(sum(3,2))
console.log(typeof sum)

// It can be stored in an array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](3,5))

// It can be stored in an object
var obj= {
    sum : add
}
console.log(obj)
console.log(obj.sum(5,9))

//We can create function as we need

setTimeout(function(){
    console.log('I have created..')
}, 2000)