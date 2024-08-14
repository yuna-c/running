// 2. 스코프
// 1. 출력값과 출력되는 값의 이유를 설명해주세요
// 출력 값 : yuno2,
// 이유 : 스코프 체인 형식이여서
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
// 출력 값 : 2
// 이유 : var은 if문 위에서도 동작한다(함수스코프라서) x가 1로 먼저 할당되고, true조건이므로 무조건 아래있는 x 2가 출력
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
			console.log(`같니` + nameObj === this);
		};
		function normal() {
			console.log(`일반 함수 : ${this.name}`);
			console.log(`같니` + nameObj === this);
		}
		arrow();
		normal();
	},
};

nameObj.method();
// this가 바인딩 되는 조건 :
// 전역this : 최상단 객체인
// 브라우저 -> window,
// node.js -> gobal

// 함수 호출 This
// 단순 호출하면 this 전역객체 가르킴
// 예를 들어
function test() {
	console.log(this); // global
}
test();

// 메서드 안의 this 호출
// 메서드 내부의 this는 해당 해당 객체를 가리킴

// 화살표 함수 내의 this
// 자기 자신의 this 바인딩 자체를 명시적으로 가르키진 않음. 단, 실행되는 불러올 당시의 스코프의 this를 가르킴
