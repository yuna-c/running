// ## 3. 홀짝 판별기

function sniffling(num) {
	return num % 2 === 0 ? '짝수' : '홀수';
}

console.log(sniffling(10)); // 결과값 "짝수";
console.log(sniffling(7)); // 결과값 "홀수";
