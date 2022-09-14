// What is pure function?


// it returns the same result if given the same arguments 

// it doesnt cause any observable side effects

function square(n){
    return n*n;
}
console.log(square(3))
console.log(square(3))
console.log(square(3))

//side effects
var n = 20
function num(){
    n= 15;
    console.log(n)
}
num()
console.log(n)

var point = {
    x: 45,
    y: 30
}

function pointView(point){
    point.x = 200
    point.y = 100
    console.log(point)
}
console.log(point)
pointView(point)
