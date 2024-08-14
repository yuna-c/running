// 3.this
// 1. <빈칸>을 작성해주세요
const obj1 = {
	value: 20,
	getValue() {
		// < 빈칸 >
		console.log(this.value);
	},
};
// console.log( < 빈칸 > ) ; //  출력값 20
console.log(obj1.getValue());
{
	/* 2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요 */
}
const obj2 = {
	method: function () {
		console.log('첫번째 this : ', this);
		console.log(`같니` + obj2 === this);
		const innerMethod = () => {
			setTimeout(function () {
				console.log('두번째 this : ', this);
				console.log(`같니` + obj2 === this);
				console.log(this);
			});
		};
		innerMethod();
	},
};

obj2.method();
// setTimeout 윈도우, node 참조하는 this가 다르다?
//첫번째 : 일반 함수는 obj2를 바운딩하지만
//두번째 : 윈도우 화살표함수는 함수가 선언될 때 this에 바인딩될 객체가 결정되기 때문에 상위스코프의 this를 가르켜서 window를 가르킨다.
