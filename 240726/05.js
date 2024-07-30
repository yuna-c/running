// ## 5. forEach로 변환해보기

//해당 문제를 forEach로 변경하여 풀어주세요
let arr = [10, 20, 30];
let arr3 = [];
// 해당 로직을 작성하세요
arr.forEach((data, idx) => {
	arr[idx] = data * 10;
});
console.log(arr);

// 결과 값: [100, 200, 300] 출력해주세요

let arr1 = [10, 22, 33];
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요
let arr2 = [];
arr1.forEach((data) => {
	if (data % 5 === 0) {
		arr2.push(data);
	}
});
console.log(arr2);
// 결과값 [10]
