// ## 1. 빈칸 채우기 문제

// 1. 값을 선언만 한 하고, 변수를 초기화를 하지 않았기 때문에 undefined
let uninitialized;
console.log(uninitialized); // 결과값 < undefined >

// 2. const는 재할당이 불가능
let apple = '사과';
apple = '바나나'; // TypeError: Assignment to constant variable

// 3. 배열의 인덱스는 0번 부터 시작
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >

// 4. 아니아니 연산자
let mySchedule = '';
console.log(mySchedule || false); // < false > || 연산자 앞에는 조건이 거짓이면 거짓을 반환한다.
console.log(!!mySchedule); // < false > : 이중부정을 사용하면 false를 가진다.
