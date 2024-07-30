// 1. Promise 다뤄보기
const API_URL = 'https://open.api.com/v1/data';
const WRONG_URL = 'https://open.api.com/v1/wrong';

function getData(url) {
	// 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (url === API_URL) {
				resolve('데이터 가져오기 완료');
			} else {
				reject('데이터 가져오기 실패');
			}
		}, 3000);
	});
}

// getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.
getData(API_URL)
	.then((res) => console.log(res))
	.catch((error) => console.log(error));

getData(WRONG_URL)
	.then((res) => console.log(res))
	.catch((error) => console.log(error));
