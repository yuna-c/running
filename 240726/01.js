// ## 1. 얕은 복사

// 1.
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1); // [ 10, 2, 3 ]
console.log(arr1 === arr2); // true

// 2.
const obj1 = { a: 1, b: 2, c: 3 };
let obj2 = obj1; // obj1을 얕은 복사하는 코드로 작성해주세요
console.log(`obj`, obj2);
/* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */
obj2['d'] = 4;
obj2.e = 5;

/* 해당값 obj1, obj2의 값을 출력해주세요 */
console.log(`obj1`, obj1);
console.log(`obj`, obj2);
