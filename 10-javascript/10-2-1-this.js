/* bind() */
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

class Bob1 { }
const bob1 = new Bob1();
bob1.run = counter1.increase;
bob1.run(); // Bob1

/* arrow function */
class Counter2 {
  count = 0;
  increase = () => {
    console.log(this);
  };
}
const counter2 = new Counter2();
counter2.increase(); // Counter2 (메서드로서 호출)

const caller2 = counter2.increase.bind(counter2);
caller2(); // Counter2 😉

class Bob2 { }
const bob2 = new Bob2();
bob2.run = counter2.increase;
bob2.run(); // Bob2
