const student = {
	name: 'yuno',
	age: '30',
	skill: ['javascript'],
	address: {
		city: 'seoul',
	},
};

const shallowCopy = student;
const deepCopy = structuredClone(student);

console.log(shallowCopy === student);
console.log(shallowCopy.address == student.address);

console.log(student, deepCopy);
console.log(student === deepCopy);
console.log(student.address == deepCopy.address);

shallowCopy.skill[0] = 'js';
deepCopy.address.city = 'busan';

console.log('5. 원본 객체(student):', student);
console.log('6. 얕은 복사된 객체(shallowCopy):', shallowCopy);
console.log('7. 깊은 복사된 객체(deepCopy):', deepCopy);
