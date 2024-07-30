// class

// Promise
// new Promise

class Tutor {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	introduce() {
		console.log(`안녕하세요, 저는 ${this.name} 튜터이고, 나이는 ${this.age}`);
	}
}

let junhyun = new Tutor('김준현', 120);
junhyun.introduce();
