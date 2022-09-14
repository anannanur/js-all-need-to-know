function sample(a,b,func){
    var c = a+b
    var d = a-b
    var result = func(c,d)
    return result;
}

function sum(c,d){
    return c+d;
}

console.log(sample(5,3,function(c,d){
    console.log(c,d)
    return c-d
}))
console.log(sample(5,3,function(c,d){
    return c*d
}))
console.log(sample(5,3,function(c,d){
    return c/d
}))