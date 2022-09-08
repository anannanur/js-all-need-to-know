var a = 10;
console.log(10);

//string literal
var b = 'string';

//string constructor
console.log(String(a));

console.log(a.toString());

console.log(a + '');

// string comparison 

// string comparison happens by lexicographic order 
// z,y,x...c,b,a,Z....A

var lttr1 = 'abc';
var lttr2 = 'aac';

var num1 = 2;
var num2 = '2';
console.log(num1 === num2)

console.log(lttr1 > lttr2);

// comparing between string and number
// here string is converted into number. then both r nmbr and eql
console.log('001' == 1)

var a = 'I am';
var b = 'Humayra Nur Ananna';

var c = a.concat(' ',b);
console.log(c);

console.log(c.substr(5))
console.log(c.substr(5,7))
console.log(c.substr(5,11))

console.log(c.charAt(5))

console.log(c.startsWith('H'))
console.log(c.startsWith('I'))

console.log(c.toUpperCase())
console.log(c.toLowerCase())

console.log('    sughlshioh   ')
console.log('    sughlshioh   '.trim())
console.log(c.split(' '))


var str = 'HN Ananna';
var length = 0;
while(true){
    if(str.charAt(length) == ''){
        break
    }
    else{
        length++
    }
}
console.log(length)

console.log(str.length);

console.log('Humayra'.length);