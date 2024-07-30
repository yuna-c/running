// ## 6. 메소드 체이닝

// 주어진 학생 객체 배열에서 각 학생의 평균 점수를 계산한 후, 평균이 80점 이상인 학생의 이름만 필터링하여 출력해주세요.
// 가능하다면 메소드 체이닝으로 풀어주세요

1;
const students = [
	{ name: '이재상', scores: [80, 90] },
	{ name: '김준현', scores: [90, 95] },
	{ name: '정윤오', scores: [75, 70] },
];

// 여기에 코드를 작성해주세요
// 예상 출력: ["이재상", "김준현"]
// 숫자도 두개로 줄이고 형태도 바꿔줘야겟다
const score = students
	.map((student) => {
		// student 객체 { name: '이재상', scores: [80, 90] },
		return {
			name: student.name,
			average: (student.scores[0] + student.scores[1]) / 2,
			// () => {},
		};
	}) //배열
	.filter((score) => score.average > 80) // 배열
	.map((student) => student.name);
console.log(score);

//2
students
	//[이재상,김준현, 정윤오],filter((student))
	.map((student, index) => {
		student.name;
	})
	.filter((student, index) => {
		student !== '정윤오'; // 원본객체 배열 안망침 맵, 필터
	});
console.log(students);

const aa = students.filter((student) => {
	let avg = student.scores.reduce((prev, curr) => prev + curr, 0) / student.scores.length;
	// 누산기 : (이전반환값콜백, 현재 인자 어레이의 엘리먼트) => 첫번째 실행에 결괏값
	// 0 + 80 다음번 실행에 prev = 80 + curr 90 (,0번부터 시작하겠다)
	// 배열에 있는 반환값을 한개로 뭉쳐야 될 떄 쓴다

	return avg >= 80;
	// 중괄호 있으면 무조건 return 있어야댐(반환안댐)
});

//  aa.map.filter.every() 불리언
// 배열메서드 이외에는 뒤에 배열 못씀
// 배열의 길이 바꾸기 filter
2;
const numbers = [5, 10, 15, 20, 25];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
const numTest = numbers
	.map((num) => {
		return num * 2;
	})
	.filter((num2) => num2 <= 30);
console.log(numTest);
// 출력값 : [10, 20, 30]
