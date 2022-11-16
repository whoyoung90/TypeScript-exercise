{
  /**
   * class는 관련된 속성과 함수들을 묶어서 어떤 모양의 데이터가 될거라는 것을 정의
   * 이 정의된 class에 실제로 데이터를 넣어서 object를 만들 수 있다
   *
   * object마다 새로 만들어져야 하는 데이터? 멤버 변수 (coffeeBeans)
   * class level에서 활용하고 싶다면? static (BEANS_GRAMM_PER_SHOT, makeMachine)
   */

  /**
   * @description static
   * static을 선언한 변수는 클래스 내에서 this를 사용 못하며, 해당변수 앞에 클래스명.
   * static을 선언하면 new 객체를 생성하지 않아도 사용 가능하다.
   * static으로만 선언하면 값은 변경 가능하므로 변하지 않는 값으로 선언하고 싶다면 static readonly.
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 멤버 변수 작성시 const let function 제거
  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level => object마다 생성되지X (중복 제거)
    coffeeBeans: number = 0; // instance (object) level

    /* class로 object(instance)를 만들때 항상 호출되는 생성자 함수 */
    constructor(beans: number) {
      this.coffeeBeans = beans; // instance (object) level => "this"
    }

    /* ✨ constructor를 호출하지 않겠다면? */
    // class 내부의 어떤 속성값도 필요하지 않으므로 static
    static makeMachine(beans: number): CoffeeMaker {
      return new CoffeeMaker(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      /* 멤버 변수에 접근 시 */
      // class level => "클래스명" (static은 this안에 있지 않고 class자체에 있으므로)
      // instance (object) level => "this"
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  /* object(instance) 정의 */
  // new는 class의 instance 생성, ()는 constructor 호출
  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker1 = new CoffeeMaker(14);
  console.log(maker1);

  /**
   * ✨ static을 선언했으므로 외부에서 다시 class를 안 만들어도 된다
   * static 제거시, 더이상 class level에 있는 함수를 이용할 수 없고 만들어진 object안에서 호출해야 한다. (ex. maker1.makeMachine)
   * 즉 class 레벨에서 활용하고 싶다면 static을 붙이자!
   */
  const maker2 = CoffeeMaker.makeMachine(3);
  console.log(maker2);
}

/**
 * @decription Javascript Static 예시
 * @returns { Math.floor, Math.abs ... }
 * const math = new Math();를 하지 않아도
 * Math안에 있는 것들은 모두 class level이기 때문에 바로 사용 가능!
 * (즉 object를 생성하지 않고도 class level에서 바로 함수를 호출 가능)
 */
