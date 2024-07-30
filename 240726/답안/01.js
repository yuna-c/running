// 1.
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1);
console.log(arr1 === arr2);

// 2.
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = obj1;
obj2.d = 4;
console.log(obj1);
