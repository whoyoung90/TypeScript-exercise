/** 
 * @description 다른 객체지향언어에서 this란?
 * Class 자신, 생성된 Object 자신
 */
// class Car {
//   engine: number;

//   move() {
//     this.engine++;
//   }
// }
// blueCar.move(); yellowCar.move();

/**
 * @description 자바스크립트언어에서 this란?
 * 호출한 문맥에 따라서 this가 동적으로 달라진다.
 */

console.log(this); // Window

function simpleFunc() {
  console.log(this);
}
simpleFunc(); // Window (함수로서 호출)
window.simpleFunc(); // Window (메서드로서 호출)

console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); // Counter (메서드로서 호출)

/** 
 * let const로 선언한 변수는 Window에 등록되어 있지 않으므로 
 * caller를 호출하는 것은 Window가 아니라 그 어떤 Object도 아니기 때문에 
 * undefined이 호출
 * */
const caller = counter.increase;
caller(); // undefined 🤔

class Bob { }
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob (메서드로서 호출)
