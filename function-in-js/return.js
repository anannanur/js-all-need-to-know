// function sub(a,b){
//     var resu = a
//     return resu
// }
// var res = sub(10,5)
// console.log(res)

// return na korle undefined show kore


function greet(msg){
    function greetings(name){
        return msg + ', ' + name + '!'
    }
    return greetings
}
var gm = greet('Good Morning')
var gn = greet('Good Night')
var wish = greet('Eid Mubarak')
console.log(gm)
// output : [Function: greetings]
console.log(typeof gm)
// output : function
console.log(gm('Humayra'))
// output : Good Morning, Humayra!
console.log(gn('Humayra'))
// output : Good Morning, Humayra!
console.log(wish('Humayra'))
// output : Good Morning, Humayra!


function power(pow){
    function base(b){
        var result = 1;
        for(var i = 0; i < pow; i++){
            result *= b
        }
        return result
    }
    return base
}

var pow = power(2)
console.log(pow(3))
//3 to the power 2
// output 9
