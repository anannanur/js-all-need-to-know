var arr = [1,2,3,4,5,6,7,8,9,10];
arr.push(11)

console.log(arr);
arr.unshift(0)
console.log(arr);

arr.pop();
console.log(arr);

arr.shift()
console.log(arr)

arr.splice(0,0, 2,22)
console.log(arr)
arr.splice(4,2)
console.log(arr)