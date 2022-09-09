//array literals

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr);
console.log(arr.length)
arr[2] = 22;
console.log(arr);
arr[10] = 6;
arr[11] = 12;
console.log(arr);
console.log(arr.length)




arr[15] = 11;
console.log(arr);
console.log(arr.length)
var i = 0;

while (true) {
    if (arr[i] == null) {
        break;
    } else {
        arr[i++];
    }
}
console.log(i)
// Array constructor
var array = Array(1, 2, 3)
console.log(array);
console.log(array.length)

