function CoffeeMachine(beans) {
  this.beans = beans;

  /* Instance member level (만들어지는 인스턴스마다 포함이 되므로) */
  // this.makeCoffee = shots => {
  //   console.log('making... ☕️');
  // };
}
/* Prototype member level (__proto__: Object에 공통으로 가지고 있으므로) */
CoffeeMachine.prototype.makeCoffee = shots => {
  console.log('making... ☕️');
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype); // CoffeeMachine을 상속!

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee(); // latteMachine에서도 makeCoffee함수를 이용할 수 있게 된다 (CoffeeMachine을 상속하므로)

// javascript에서도 typescript처럼 interface나 generic 같은 다양한 아이들은 없지만
// prototype을 이용해서 상속을 구현할 수 있다

/**
 * prototype는?
 * javascript에서 "객체지향 프로그래밍 상속"을 하기 위해 쓰이며, "코드를 재사용"하기 위해서 만들어졌다.
 */