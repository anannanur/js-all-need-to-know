var arr = [1, 23, 85, 56, 45, 52, 12, 12, 63, 53, 59, 48, 75, 76];


var find = 12;
var isData = false;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
        console.log('Data found at index ', i)
        isData = true
        // break
    }

}

if (!isData) {
    console.log('Data not found')
}