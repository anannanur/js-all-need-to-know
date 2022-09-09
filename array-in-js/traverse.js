
var arr = [4, 8, 12, 10, 21, 7, 3, 5];

var sum = 0;

for (var i = 0; i < arr.length; i++) {

    // console.log(arr[i]);
    // sum = sum + arr[i]
    // arr[i] = arr[i] + 2;

    // if (arr[i] % 2 === 0) {
    //     console.log(arr[i]);
    //     sum = sum + arr[i]
    // }
    if (arr[i] % 2 === 1) {
        console.log(arr[i]);
        sum = sum + arr[i]
    }

}
console.log(sum);

