{
  /**
   * class는 관련된 속성과 함수들을 묶어서 어떤 모양의 데이터가 될거라는 것을 정의
   * 이 정의된 class에 실제로 데이터를 넣어서 object를 만들 수 있다
   * 
   * object마다 새로 만들어져야 하는 데이터가 있다면? member 변수
   * class level에서 활용하고 싶다면? static ✨
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /* class 정의 */
  // 멤버 변수 작성시 const let function 제거
  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level => class와 연결되기 때문에 object마다 생성되지 않는다(중복 제거)
    coffeeBeans: number = 0; // instance (object) level

    /* class로 object(instance)를 만들때 항상 호출되는 함수 */
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    };

    // ✨
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      // class 멤버 변수에 접근 시 "this"
      // static은 this안에 있지 않고 class자체에 있으므로 "클래스 명"
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      };
  
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    };
  };

  /* object(instance) 정의 */
  // new는 class의 instance 생성, ()는 생성자 호출
  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  // ✨
  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3);
}

/**
 * @decription Javascript Static 예시
 * @returns {Math.floor, Math.abs ...}

 * const math = new Math();를 하지 않아도
 * Math안에 있는 것들은 모두 class level이기 때문에 바로 사용 가능!
 * (즉 object를 생성하지 않고도 class level에서 바로 함수를 호출 가능)
 */