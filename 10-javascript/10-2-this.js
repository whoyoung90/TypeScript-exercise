/** 
 * @description 다른 객체지향언어에서 this란?
 * Class 자신, 만들어진 객체 자기 자신
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
 * 호출한 문맥에 따라서 this가 동적으로 달라진다
 */

console.log(this);

function simpleFunc() {
  console.log(this);
}
window.simpleFunc();
console.clear();
class Counter {
  count = 0;
  increase = () => {
    // console.log(this);
  };
}
const counter = new Counter();
counter.increase();
const caller = counter.increase;
//const caller = counter.increase.bind(counter);
caller();

class Bob { }
const bob = new Bob();
bob.run = counter.increase;
bob.run();
