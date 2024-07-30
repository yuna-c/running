function deepCopy(o) {
	var result = {};
	if (typeof o === 'object' && o !== null) for (i in o) result[i] = deepCopy(o[i]);
	else result = o;
	return result;
}
// 3.
var arr1 = [{ a: 1 }, { b: 2 }];
var arr2 = deepCopy(arr1);
var arr2 = JSON.parse(JSON.stringify(arr1));
var arr2 = structuredClone(arr1);
// 4.
arr2[0].c = 3;
console.log(arr1 === arr2);
console.log(arr1, arr2);
