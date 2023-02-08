/** 
 * @description this정보를 잃어버리지 않으려면?
 * @returns bind
 */
class Counter1 {
  count = 0;
  increase = function () {
    console.log(this)
  }
}
const counter1 = new Counter1();
counter1.increase(); // Counter1 (메서드로서 호출)

const caller1 = counter1.increase.bind(counter1);
caller1(); // Counter1 😉

/** 
* @description this정보를 잃어버리지 않으려면?
* @returns arrow function
*
* 선언될 당시 스코프의 this contacts를 유지
*/
class Counter2 {
  count = 0;
  increase = () => {
    console.log(this);
  };
}
const counter2 = new Counter2();
counter2.increase(); // Counter2 (메서드로서 호출)

const caller2 = counter2.increase;
caller2(); // Counter2 😉