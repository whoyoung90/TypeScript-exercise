const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); // true (x와 y는 동일한 object의 proto를 상속하고 있기 때문)

/** 
 * array -> Array(concat, find, filter..) -> ✅Object(toString(), valueOf(), watch()...)
 * 
 * javascript의 모든 object들은 ✅Object라는 proto를 가지고 있는것!
 * 그래서 어떠한 종류의 object든 상관없이 toString()을 이용할 수 있는 이유!
 */

const array = [];
console.log(array);