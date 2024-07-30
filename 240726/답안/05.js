// arr.forEach((number, index) => newArr.push(number * 10));

let newArr = [];
let arr = [10, 22, 33];

// 1.
arr.forEach((q) => {
	newArr.push(q * 10);
});

// 2.
arr.forEach((q) => {
	if (q % 5 === 0) {
		newArr.push(q);
	}
});
