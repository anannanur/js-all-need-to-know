var c = 10
// function b(){
//     console.log(c)
// }
// b()

function a(){
    var x = 5;
    return function (){
        console.log(x,c)
    }
}
var abc = a
console.dir(abc())

// closure hoilo jokhon akta scope onno akta bairer scope theke
// data pay except argument