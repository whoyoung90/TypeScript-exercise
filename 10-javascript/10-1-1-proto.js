function CoffeeMachine(beans) {
  this.beans = beans;

  /* 🅰️ Instance member level (만들어지는 인스턴스마다 포함되므로) */
  // this.makeCoffee = shots => {
  //   console.log('making... ☕️');
  // };
}
/* 🅱️ Prototype member level (__proto__: Object에 공통으로 가지고 있으므로) */
CoffeeMachine.prototype.makeCoffee = shots => {
  console.log('making... ☕️');
};

const machine = new CoffeeMachine(10);
console.log(machine);
// beans: 10, makeCoffee, ▶︎ __proto__: Object 🅰️
// beans: 10, ▶︎ __proto__: Object 🅱️ (__proto__안에 공통적으로 makeCoffee 포함! CoffeeMachine.prototype에 선언했으므로)

// machine -> CoffeeMachine( makeCoffee ...) -> Object✅

/**
 * @description 자바스크립트는 타입스크립트처럼 interface나 generic 같은 다양한 아이들은 없지만
 * prototype을 이용해서 "상속"을 구현할 수 있다
 * 
 * prototype이란?
 * 자바스크립트에서 객체지향 프로그래밍 "상속"을 하기 위해 쓰이며, "코드를 재사용"하기 위해서 만들어졌다.
 */
function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype); // CoffeeMachine을 상속 ✨

const latteMachine = new LatteMachine(123);
console.log(latteMachine); // milk: 123, ▶︎ __proto__: CoffeeMachine✨ ▶︎ __proto__: Object
latteMachine.makeCoffee(); // CoffeeMachine을 상속하므로 ✨