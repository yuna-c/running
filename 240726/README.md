# Sparta_jsrunning_train

달리기반 실습 과제입니다.  
2일차에 배운 내용들을 토대로 풀 수 있도록 구성되어 있습니다.

&nbsp;

## 1. 얕은 복사

해당 문제를 출력해 보고 출력 값을 설명해주세요

```javascript
1.
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1);
console.log(arr1 === arr2);



2.
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = // obj1을 얕은 복사하는 코드로 작성해주세요

/* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */

/* 해당값 obj1, obj2의 값을 출력해주세요 */

```

&nbsp;

## 2. 깊은 복사

예시

```javascript

function deepCopy(o) {
  var result = {};
  if (typeof o === "object" && o !== null)
    for (i in o) result[i] = deepCopy(o[i]);
  else result = o;
  return result;
}

var arr1 = [ { a : 1 }, { b : 2 } ]
var arr2 = /* 여기에 깊은 복사 코드를 작성해주세요
깊은복사 할 때 deepCopy를 사용하시거나 다른 방식도 가능합니다. */

/* arr2의 0번째 객체에 c라는 속성을 추가하고 값을 3으로 할당해주세요 */

/* arr1을 출력해주세요 출력값 : [{a:1}, {b:2}] */
/* arr2를 출력해주세요 출력값 : [{a:1, c: 3}, {b:2}]*/

```

&nbsp;

## 3.얕은 , 깊은 복사

예시

```javascript

const student = {
  name: "yuno",
  age: "30",
  skill: ["javascript"],
  address: {
    city: "seoul"
  }
};

// 얕은 복사를 수행하여 shallowCopy를 만들어주세요.
const shallowCopy =

// 깊은 복사를 수행하여 deepCopy를 만들어주세요.
const deepCopy =

// 얕은 복사 객체와 원본 객체를 비교하여 출력해주세요
console.log("1. 원본 객체(student)와 얕은 복사 객체가 같을까요?", );

// 얕은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log("2. 원본 객체의 address와 얕은 복사 객체의 address가 같을까요?", );

// 깊은 복사 객체와 원본 객체를 비교하여 출력해주세요.
console.log("3. 원본 객체(student)와 깊은 복사 객체가 같을까요?", );

// 깊은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log("4. 원본 객체의 address와 깊은 복사 객체의 address가 같을까요?", );



2.
// 동일한 student로 진행합니다.

// 얕은 복사한 객체에 배열요소 변경 javascript -> js으로 변경해주세요

// 깊은 복사 객체의 주소 속성을 변경하세요 (예: city를 "busan"으로 변경)

// 결과 확인
console.log("5. 원본 객체(student):",);
console.log("6. 얕은 복사된 객체(shallowCopy):",);
console.log("7. 깊은 복사된 객체(deepCopy):", );

/* 1~7번까지 출력값을 출력해보고 적어주세요
예 ) 1. true
	...
     5. {
	  name : ... ,
          agae : ... ,
	  skill : ...,
	  ....
        }
*/

```

&nbsp;

## 4. 배열 API 활용

예시

```javascript
1;
//배열 API map 활용
var arr = [10, 20, 30];
// arr의 각 요소에 10을 곱한 새로운 배열을 생성해주세요
// 결과 값: [100, 200, 300]을 출력해주세요

2;
//배열 API filter 활용
var arr = [10, 22, 33];
// 5의 배수를 찾아 반환해주세요
// 결과값 [10]을 출력해주세요

3;
const numbers = [5, 10, 15, 20, 25];
// 크기가 15보다 큰 숫자의 값을 반환하여 출력해주세요
// 출력값 [20, 25]

4;
var arr = ['banana', 'kiwi', 'mango', 'strawberry', 'lime', 'orange', 'plum', 'cherry'];
// 문자열 길이가 4 이상인 값을 반환하여 출력해주세요

5;
var arr = ['banana', 'kiwi', 'mango', 'strawberry', 'lime', 'orange', 'plum', 'cherry'];
// 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요

6;
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// 오름차순으로 정렬하여 출력해주세요

7;
var student = [
	{ name: '이재상', age: 25 },
	{ name: '정윤오', age: 30 },
	{ name: '김준현', age: 12312 },
];

// age를 이용하여 내림차순으로 정렬하고 출력해주세요

8;
var student = [
	{ id: 1, name: '이재상' },
	{ id: 2, name: null },
	{ id: 3, name: '김준현' },
];
// 객체 배렬에서 name 속성이 null인 객체가 있는지 판별을 확인하는 코드를 작성하고 반환값을 출력해주세요

9;
var arr = ['banana', 'kiwi', 'mango', 'strawberry', 'lime', 'orange', 'plum', 'cherry'];
// 문자열 길이가 5를 초과하는 요소가 있는지 검사하는 코드를 작성하고 반환값을 출력해주세요.

10;
var arr = ['banana', 'kiwi', 'mango'];
// kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성하고 출력해주세요

11;
var arr = [1, 5, -3, 10, 0, 8];

// 배열에 음수가 하나라도 있는지 판별하는 코드를 작성하고 반환값을 출력해주세요

12;
var arr = [1, 5, -3, 10, 0, 8];
// 모든 숫자가 음수인지 판별하는 코드를 작성하고 반환값을 출력해주세요
```

&nbsp;

## 5. forEach로 변환해보기

예시

```javascript

//해당 문제를 forEach로 변경하여 풀어주세요
1. let arr=  [10, 20, 30]

// 해당 로직을 작성하세요

// 결과 값: [100, 200, 300] 출력해주세요

2. let arr=  [10, 22, 33]
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요

// 결과값 [10]

```

&nbsp;

## 6. 메소드 체이닝

&nbsp;

주어진 학생 객체 배열에서 각 학생의 평균 점수를 계산한 후, 평균이 80점 이상인 학생의 이름만 필터링하여 출력해주세요.
가능하다면 메소드 체이닝으로 풀어주세요

```javascript
1.
const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] }
  { name: "정윤오", scores: [75, 70] },

];

// 여기에 코드를 작성해주세요
// 예상 출력: ["이재상", "김준현"]

2.
const numbers = [5, 10, 15, 20, 25];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
// 출력값 : [10, 20, 30]

```
