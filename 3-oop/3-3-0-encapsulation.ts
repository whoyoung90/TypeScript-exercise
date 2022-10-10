{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * @description Encapsulation : 외부에서 설정할 수 없도록 은닉화(private)
   * public
   * private => class외부에서 접근 불가
   * protected => class외부에서 접근 불가 + class를 상속한 자식 class내에서는 접근 가능
   */
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    /**
     * @description private constructor
     * makeMachine으로만 생성이 가능하다! 🅱️
     * (외부에서 new 생성자를 이용하여 생성 금지)
     */
    static makeMachine(beans: number): CoffeeMaker {
      return new CoffeeMaker(beans);
    }

    /**
     * @description private coffeeBeans
     * fillCoffeeBeans으로만 내부 상태 변경이 가능하다! 🅰️
     */
    fillCoffeeBeans(fill: number) {
      if (fill < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += fill;
    }

    makeCoffee(shots: number): CoffeeCup {
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

  // const maker = new CoffeeMaker(32); // 🅱️ Constructor of class 'CoffeeMaker' is private and only accessible within the class declaration.ts(2673)
  // maker.coffeeBeans = 3; // 🅰️ Property 'coffeeBeans' is private and only accessible within class 'CoffeeMaker'.ts(2341)

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(3);
}
