function add(a,b,c){
    return a+b+c;
}
console.log(add(2,3,4))
// output : 9

//currying
function currying(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
var result = currying(2)(3)(4)
console.log(result)
// output: 9