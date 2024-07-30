// 1. Promise 다뤄보기
const API_URL = 'https://open.api.com/v1/data';
const WRONG_URL = 'https://open.api.com/v1/wrong';

function getData(url) {
	// 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (url === API_URL) {
				resolve('data success');
			} else {
				reject('data failed');
			}
		}, 3000);
	});
}

// getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.
getData(API_URL)
	.then((res) => console.log(res))
	.catch((error) => console.log(error));
getData
	.apply(WRONG_URL)
	.then((res) => console.log(res))
	.catch((error) => console.log(error));

async function getAsyncData(url) {
	// 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
	try {
		const response = await new Promise((resolve, reject) => {
			setTimeout(() => {
				if (url === API_URL) {
					resolve('OK');
				} else {
					reject('NOPE');
				}
			}, 3000);
		});
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}
getAsyncData(API_URL);
getAsyncData(WRONG_URL);

function task1() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Task 1 Complete');
		}, 1000);
	});
}

function task2() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Task 2 Complete');
		}, 2000);
	});
}

function task3() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Task 3 Complete');
		}, 3000);
	});
}

async function sequential() {
	console.log('직렬');
	console.time('sequential');
	try {
		const result1 = await task1();
		console.log(result1);
		const result2 = await task2();
		console.log(result2);
		const result3 = await task3();
		console.log(result3);
	} catch (error) {
		console.log('Error:', error);
	}
	console.timeEnd('sequential');
}
// sequential();

async function parallel() {
	console.log('병렬');
	console.time('Parallel');
	try {
		const results = await Promise.all([task1(), task2(), task3()]);
		results.forEach((result) => {
			console.log(result);
		});
	} catch (error) {
		console.log('Error:', error);
	}
	console.timeEnd('Parallel');
}
// parallel();
sequential().then(() => parallel());

function taskA() {
	return new Promise((resolve, reject) => {
		const time = Math.floor(Math.random() * 5000);
		setTimeout(() => {
			resolve('Task A Complete');
		}, time);
	});
}

function taskB() {
	return new Promise((resolve, reject) => {
		const time = Math.floor(Math.random() * 5000);
		setTimeout(() => {
			resolve('Task B Complete');
		}, time);
	});
}

function taskC() {
	return new Promise((resolve, reject) => {
		const time = Math.floor(Math.random() * 5000);
		setTimeout(() => {
			resolve('Task C Complete');
		}, time);
	});
}

(async function findFirstCompletedTask() {
	try {
		const results = await Promise.race([taskA(), taskB(), taskC()]).then((res) => console.log(res));
		return results;
	} catch (error) {
		console.log(`Error`, error);
	}
})();
