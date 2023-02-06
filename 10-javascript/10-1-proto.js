/**
 * 자바스크립트도 객체지향 프로그래밍 언어이다.
 * 프로토타입을 기반으로해서 객체지향 프로그래밍을 할 수 있기 때문 (proto-based)
 * 
 * Class를 선언하고 extends해서 "상속"을 구현할 수 있는 것처럼
 * 자바스크립트에서는 프로토타입을 이용해서 "상속"을 구현한다.
 * (프로토타입은 상속을 위해 쓰이는 언어)
 * 
 * @description Prototype-base Programming
 * - a style of OOP
 * - behavior reuse (inheritance)
 * - by reusing existing objects
 */

const x = {};
const y = {};
console.log(x); // __proto__: Object
console.log(y); // __proto__: Object
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); // true (x와 y는 동일한 Object✅의 proto를 상속하고 있기 때문)

/** 
 * array -> Array(concat, find, filter..) -> Object✅ (toString(), valueOf(), watch()...)
 * 
 * javascript의 모든 object들은 Object✅라는 proto를 가지고 있다(상속하고 있다).
 * 그래서 어떠한 종류의 object든 상관없이 toString()을 이용할 수 있는 이유!
 */

const array = [];
console.log(array); // __proto__: Array(0) -> __proto__: Object
console.log(array.concat);