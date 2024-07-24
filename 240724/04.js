// ## 4. 계산기 문제

function calculator(num1, oper, num2) {
	switch (oper) {
		case '+':
			console.log(num1 + num2);
			break;
		case '-':
			console.log(num1 - num2);
			break;
		case '*':
			console.log(num1 * num2);
			break;
		case '/':
			console.log(num1 % num2);
			break;
	}
}

calculator(3, '+', 6); // 결과값 9
calculator(11, '-', 6); // 결과값 5
calculator(6, '*', 3); // 결과값 18
calculator(15, '/', 3); // 결과값 5
