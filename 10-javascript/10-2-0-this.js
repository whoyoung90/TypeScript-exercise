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
 * 
 * 해당 object와 연결하고 싶다면 
 * bind함수 또는 화살표함수를 사용해야 한다!
 */

console.log(this); // Window

function simpleFunc() {
  console.log(this);
}
simpleFunc(); // Window (함수로서 호출)
window.simpleFunc(); // Window

console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log(this)
  }
}
const counter = new Counter();
counter.increase(); // Counter (메서드로서 호출)

const caller = counter.increase;
caller(); // undefined 🤔

class Bob { }
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob
