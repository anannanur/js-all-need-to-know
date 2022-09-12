var obj = {
    x: 4,
    y: 7
}

console.log(Object.keys(obj))
// ['x','y']

console.log(Object.values(obj))
// [4,7]

console.log(Object.entries(obj))
// [ [ 'x', 4 ], [ 'y', 7 ] ]


var obj2 = Object.assign({}, obj)
console.log(obj2)
obj2.x = 90;
console.log(obj2)
console.log(obj)

// if new obj is copied from previous obj by assign()
//then its identity is separated from previous obj


