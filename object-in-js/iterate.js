var obj = {
    a: 34,
    b: 55
}

//in operator check if a properties is there or not
// if there, then return true else false
console.log('a' in obj);
console.log('c' in obj);

for(var i in obj){
    // console.log(i)
    console.log(i + ' : '+ obj[i])
}