// ## 2. 깊은 복사

function deepCopy(o) {
	var result = {};
	// if (Array.isArray(o)) ? 이거 만들어 보기 하단 참고 ( 배열 복사 하는 거.. )
	if (typeof o === 'object' && o !== null) for (i in o) result[i] = deepCopy(o[i]);
	else result = o;
	return result;
}

// 유사 배열로 나오는 이유 : 코드 ?

var arr1 = [{ a: 1 }, { b: 2 }]; // 배열인데 deepCopy(arr1) 하면 딥카피로 바뀜
var arr2 = JSON.parse(JSON.stringify(arr1));
var arr3 = deepCopy(arr1);
var arr4 = structuredClone(arr1);
// deepCopy(arr1);
// JSON.parse(JSON.stringify(arr1));
/* 여기에 깊은 복사 코드를 작성해주세요
깊은복사 할 때 deepCopy를 사용하시거나 다른 방식도 가능합니다. */
console.log(arr3);
console.log(arr1 === arr2);
console.log(arr1 === arr3);

/* arr2의 0번째 객체에 c라는 속성을 추가하고 값을 3으로 할당해주세요 */
arr2[0].c = 3;
arr3[0].c = 77;
console.log(arr1, arr2, arr3);
/* arr1을 출력해주세요 출력값 : [{a:1}, {b:2}] */
/* arr2를 출력해주세요 출력값 : [{a:1, c: 3}, {b:2}]*/
