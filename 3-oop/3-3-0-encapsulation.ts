{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private: class외부에서 접근 불가
  // protected: class외부에서 접근 불가 + class를 상속한 자식 class내에서는 접근 가능
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    /* constructor를 private 설정해서 static 메서드를 이용할 수 있도록 권장 */
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    /* coffeeBeans을 private 설정해서 public fillCoffeeBeans으로 내부 상태 변경 */
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // const maker = new CoffeeMaker(32); // Constructor of class 'CoffeeMaker' is private and only accessible within the class declaration.ts(2673)
  const maker = CoffeeMaker.makeMachine(32);

  // maker.coffeeBeans = 3; // Property 'coffeeBeans' is private and only accessible within class 'CoffeeMaker'.ts(2341)
  maker.fillCoffeeBeans(32);
}
