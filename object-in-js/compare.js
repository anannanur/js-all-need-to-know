var obj1 = {
    x : 5,
    y : 1
}
var obj2 = {
    x : 5,
    y : 1
}

console.log(obj1 === obj2)
// output will be false bcz it compares their memory location

console.log(obj1.x === obj2.x && obj1.y === obj2.y)
//it will be true

console.log(typeof obj1)
console.log(typeof obj2)

console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
//it will return true

var obj1s = JSON.stringify(obj1);
console.log('obj1s : ',obj1s)
console.log(typeof obj1s)

var obj2s = JSON.stringify(obj2);
console.log('obj2s : ',obj2s)
console.log(typeof obj2s)
