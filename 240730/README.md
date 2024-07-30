# 달리기반 3회차 실습 과제

달리기반 3회차 실습 과제입니다.  
전날 배운 DOM 조작, 동기/비동기 내용들을 토대로 풀 수 있도록 구성되어 있습니다.

&nbsp;

## 1. Promise 다뤄보기

1. `getData` 라는 주어진 url을 인자로 받는 함수를 만들어주세요.
2. `getData` 는 3초 후 url이 기준 url과 동일할 경우 성공적으로 데이터를 반환하고, 틀릴 경우 에러를 발생시킵니다.
3. `then`과 `catch`를 이용하여 데이터를 처리하는 방법과 에러를 처리하는 방법 두 가지를 각각 보여주세요.

```javascript
const API_URL = 'https://open.api.com/v1/data';
const WRONG_URL = 'https://open.api.com/v1/wrong';

function getData(url) {
	// 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
}

// ...

// getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.
```

&nbsp;

## 2. Async / Await 다뤄보기

위 1번 문제에서 다루었던 비동기 처리를 `async`, `await` 키워드를 사용하여 코드를 수정해서 작성해주세요.

```javascript
// async await 를 사용한 코드로 변경해보기
```

&nbsp;

## 3. PromiseAll 다뤄보기 (빈칸 채우기)

세 개의 setTimeout 비동기 함수를 각각 직렬, 병렬로 호출하는 코드입니다.
아래의 코드를 보고 < 빈칸 > 부분을 각각 채워주시고, 그렇게 생각하는 이유도 내용으로 적어주세요.
(총 빈칸 3개)

```javascript
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 Complete");
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 Complete");
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 Complete");
    }, 3000);
  });
}

async function runTasksSequential() {
  console.time("Sequential");
  try {
    const result1 = await task1();
    console.log(result1);
    const result2 = await task2();
    console.log(result2);
    const result3 = await task3();
    console.log(result3);
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Sequential");

  // 예상되는 대략적인 시간과 그 이유 < 빈칸 1 >
}

async function runTasksParallel() {
  console.time("Parallel");
  try {
    // 병렬로 promise들을 한 번에 처리하는 코드
    const results = < 빈칸 2 >
    results.forEach((result) => console.log(result));
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Parallel");
  // 예상되는 대략적인 시간과 그 이유 < 빈칸 3 >
}

// 함수 호출
runTasksSequential().then(() => runTasksParallel());
```

&nbsp;

## 4. DOM 제어와 함께 비동기 처리하기

html 파일을 하나 만들고 openAPI 를 활용해 고양이 사진을 불러오는 api를 요청하려 합니다.
받아온 고양이 사진 url을 img 태그를 생성하고, `imageContainer` 라는 이름의 div에 동적으로 생성해주세요.
3번 문제는 03.js가 아닌, 아래 코드를 참고하여 03.html (혹은 index.html 등 이름은 자유) 로 진행해 주시기 바랍니다.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>랜덤 고양이 사진</title>
	</head>
	<body>
		<div id="imageContainer"></div>

		<script>
			let API_URL = `https://api.thecatapi.com/v1/images/search`;

			let options = {
				method: 'GET',
				headers: {
					'accept': 'application/json',
					'x-api-key': 'live_8GfbTk0GMtgRdbxUB7XcuYzuMmfShEHGHNSnDo26DDgJDVUHDWqzJ25rJKpsSqud',
				},
			};

			// API_URL 과 options를 사용해 fetch 로 API 요청을 한 후, 해당 데이터를 통해 img 태그를 생성하여 주세요.
		</script>
	</body>
</html>
```

&nbsp;

## 5. [선택 문제] 가장 먼저 완료된 비동기 함수를 찾아라.

> 5번 문제는 선택 문제로 전 날 수업에서 배운지 않은 것을 활용하여 풀어야 합니다.
> 필수 문제가 아니니 시간이 남을 경우 도전해보세요. (검색이 허용됩니다.)

세 개의 비동기 작업이 있습니다. 각 작업은 랜덤한 시간 후에 완료됩니다.

이 중 가장 먼저 완료되는 작업의 결과를 반환하는 함수를 작성하세요.

1. taskA, taskB, taskC라는 세 개의 비동기 함수를 작성하세요. 각 함수는 랜덤한 시간 후에 "Task A Complete", "Task B Complete", "Task C Complete" 메시지를 반환합니다.

2. 가장 먼저 완료된 작업의 결과를 반환하는 findFirstCompletedTask라는 함수를 작성하세요.

```javascript
function taskA() {
	return new Promise((resolve) => {
		const time = Math.floor(Math.random() * 5000);
		setTimeout(() => {
			resolve('Task A Complete');
		}, time);
	});
}

function taskB() {
	return new Promise((resolve) => {
		const time = Math.floor(Math.random() * 5000);
		setTimeout(() => {
			resolve('Task B Complete');
		}, time);
	});
}

function taskC() {
	return new Promise((resolve) => {
		const time = Math.floor(Math.random() * 5000);
		setTimeout(() => {
			resolve('Task C Complete');
		}, time);
	});
}

// 가장 먼저 완료된 작업을 찾아서 반환되는 값을 출력하세요.
// findFirstCompletedTask
```

&nbsp;
