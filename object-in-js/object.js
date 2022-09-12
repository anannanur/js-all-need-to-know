var obj1 = {}
console.log(obj1)

obj1.a = 80
obj1.b = 89
console.log(obj1)
// console.log(obj2)

obj1.b= 97
console.log(obj1)

var obj2 = {
    x: 23,
    y: 19
}
console.log(obj2)

var obj3 = Object();

obj3.c = 20;
console.log(obj3)

var obj4 = new Object();
obj4.d = 11
console.log(obj4)


var obj5 = {
    x: 2,
    y: 3,
    z: 5
}
//dot notation
console.log(obj5.x)

//array notation
console.log(obj5['y'])

var show = 'z';
console.log(obj5[show])


console.log(obj5.x + obj5.y)

obj5.x = 10;
obj5['y'] = 30;
var prop = 'z'
obj5[prop] = 45;

obj5.a = 40;

console.log(obj5.d);
console.log(obj5.x)
console.log(obj5.y)
console.log(obj5.z)
console.log(obj5)
obj5.a = undefined
console.log(obj5)

// delete operator 
delete obj5.a
console.log(obj5)

















