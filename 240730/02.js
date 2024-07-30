// 2. Async / Await 다뤄보기
// async await 를 사용한 코드로 변경해보기
const API_URL = 'https://open.api.com/v1/data';
const WRONG_URL = 'https://open.api.com/v1/wrong';

async function getData(url) {
	// 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
	try {
		const response = await new Promise((resolve, reject) => {
			setTimeout(() => {
				if (url === API_URL) {
					resolve('데이터 가져오기 완료');
				} else {
					reject('데이터 가져오기 실패');
				}
			}, 3000);
		});
		console.log(response);
	} catch (error) {
		console.error(error);
	}
}
getData(API_URL);
getData(WRONG_URL);
