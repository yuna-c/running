// 2. 스코프
// 1. 출력값과 출력되는 값의 이유를 설명해주세요
// 출력 값 : yuno2, 이유 : myname 안에서 호출 됐으므로, a안에 스코프 안의 이름이 출력(단계단계)
// 네임있어? 웅아닝.. 너 위에는 있오? 웅 요깃오
var name = 'yuno';

function myName() {
	var name = 'yuno2';
	function a() {
		console.log(name);
	}
	return a();
}

myName();

// 2. 출력값과 출력되는 값의 이유를 설명해주세요
// 출력 값 : 2, 이유 : var은 if문 위에서도 동작한다(함수스코프라서) x가 1로 먼저 할당되고, true조건이므로 무조건 아래있는 x 2가 출력
function test() {
	var x = 1;

	if (true) {
		var x = 2;
	}

	console.log(x);
}

test();

// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
// 출력 값 :
// (화살표)yuno, 이유 : 화살표 함수는 this 변수 자체가 존재하지 않아서, 그 상위의 this를 참조 할수 있다.
// (일반)undefined 3, 이유 : 함수는 호출 되었지만 this는 지정되지 않아서 곧 전역 객체를 가르키기 때문에 undefined(함수에 this 쓰면 global 전역 함수)
const nameObj = {
	name: 'yuno',
	method: function () {
		const arrow = () => {
			console.log(`화살표 함수 : ${this.name}`);
		};
		function normal() {
			console.log(`일반 함수 : ${this.name}`);
		}
		arrow();
		normal();
	},
};

nameObj.method();
