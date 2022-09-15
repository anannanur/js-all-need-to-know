var arr = [2, 4, 5, 6, 6, 3, 0, -1, -5, -9]

arr.sort()
console.log(arr)

/* output : [
  -1, -5, -9, 0, 2,
  3,  4,  5, 6, 6 
] */

var persons = [
    {
        name: 'A',
        age: 28
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 23
    },
    {
        name: 'D',
        age: 30
    },
]

persons.sort()
console.log(persons)

/* output:
[
  { name: 'A', age: 28 },
  { name: 'B', age: 19 },
  { name: 'C', age: 23 },
  { name: 'D', age: 30 }
]*/

arr.sort(function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})

console.log(arr)

/*
[
  -9, -5, -1, 0, 2,
   3,  4,  5, 6, 6
]*/


persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    } else if ((a.age < b.age)) {
        return -1
    } else {
        return 0
    }
})

console.log(persons)
/* output:
[
  { name: 'B', age: 19 },
  { name: 'C', age: 23 },
  { name: 'A', age: 28 },
  { name: 'D', age: 30 }
]*/

var res = arr.every(function(value){
    // return value > -10
    /* output: true*/

    return value > 2
    /* output: false */
})
console.log(res)

var res = arr.some(function(value){
    return value < 3
      /* output: true*/
})
console.log(res)