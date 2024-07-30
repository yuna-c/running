const students = [
	{ name: '이재상', scores: [80, 90] },
	{ name: '김준현', scores: [80, 80, 80, 80, 80] },
	{ name: '정윤오', scores: [75, 70] },
];
// 1.

// 평균 구하기 함수
function avg(arr) {
	let total = 0;
	for (let index = 0; index < arr.length; index++) {
		total += arr[index];
	}
	return total / arr.length;
}

// reduce 버전
const arr = students
	.filter((student) => {
		let avg = student.scores.reduce((prev, curr) => prev + curr, 0) / student.scores.length;
		return avg >= 80;
	})
	.map((student, index) => student.name);

// 2.
const numbers = [5, 10, 15, 20, 25].map((number) => number * 2).filter((number) => number <= 30);
