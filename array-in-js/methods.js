var arr = [1,2,3,4,5,6,7];
console.log(arr);
// console.log(arr.join(', '))

// console.log(arr.fill(0))
// console.log(arr.fill(true))

var arr2 = [2,4,5,6,7,8,9];

var arr3 = arr.concat(arr2)
// console.log(arr3)


console.log(Array.isArray(arr))

var a = [1,2]
// var b = a;


// console.log(a);
// console.log(b)

var b = Array.from(a);
b[0] = 5;
console.log(b);
console.log(a);



