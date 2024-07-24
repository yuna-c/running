// ## 5. 점수 수정하기 [선택 문제]

const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

// 리턴을 활용해서 하는 방식으로 4번 문제와 연계되게 하기
function calculator(num1, oper, num2) {
	switch (oper) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
		case '/':
			return num1 % num2;
	}
}
calculator(scores);

//본래 풀이
function add(scores) {
	for (let i = 0; i < scores.length; i++) {
		scores[i] += 5;
	}
}
add(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]
