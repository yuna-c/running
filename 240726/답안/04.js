// 1.
var arr = [10, 20, 30].map((number) => {
	return number * 10;
});

// 2.
var arr = [10, 22, 33].filter((number, index) => {
	console.log(number, index);
	return number % 5 === 0;
});

// 3.
var arr = [5, 10, 15, 20, 25].filter((number, index) => number > 15);

// 4.
var arr = ['banana', 'kiwi', 'mango', 'strawberry', 'lime', 'orange', 'plum', 'cherry'].filter((string, index) => string.length >= 4);

// 5.
var arr = ['banana', 'kiwi', 'mango', 'strawberry', 'lime', 'orange', 'plum', 'cherry'].filter((string, index) => string.length % 2 === 1);

// 6.
var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3].sort((a, b) => a - b);

// 7.
var arr = [
	{ name: '이재상', age: 25 },
	{ name: '정윤오', age: 30 },
	{ name: '김준현', age: 123122 },
].sort((a, b) => b.age - a.age);

// 8.
var arr = [
	{ id: 1, name: '이재상' },
	{ id: 2, name: null },
	{ id: 3, name: '김준현' },
].filter((student) => {
	return student.name !== null;
});

var arr = [
	{ id: 1, name: '이재상' },
	{ id: 2, name: null },
	{ id: 3, name: '김준현' },
].some((student, index) => student.name === null);

var arr = [
	{ id: 1, name: '이재상' },
	{ id: 2, name: null },
	{ id: 3, name: '김준현' },
].findIndex((student, index) => {
	return student.name === null;
});

// 9.
var arr = ['banana', 'kiwi', 'mango', 'strawberry', 'lime', 'orange', 'plum', 'cherry'].some((fruit) => fruit.length > 5);

// 10.
var arr = ['banana', 'kiwi', 'mango'];
arr.splice(2, 0, 'apple');

// 11, 12
var arr = [1, 5, -3, 10, 0, 8].some((number) => number < 0);
var arr = [1, 5, -3, 10, 0, 8].every((number) => number < 0);
