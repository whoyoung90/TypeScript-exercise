{
  /**
   * @description Composition: 코드의 재사용 향상
   * Favor COMPOSITION over inheritance
   *
   * Typescript에서는 한가지 이상의 부모 class를 상속할 수 없다
   * Class can only extend a single class (extends 한개 이상 불가)
   *
   * 각각의 클래스에서 필요한 것을 매번 구현하는 것이 아니라
   * 각각의 기능별로 "class를 따로 만들어 둠으로써", 필요한 곳에서 가져다가 쓰는 composition !!
   */

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      console.log("Getting some sugar from candy 🍬"); // 외부에서 설탕을 받아와서
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFrother: CheapMilkSteamer // 필요한 것을 외부에서 주입 (dependency injection)
    ) {
      super(beans);
    }
    // private steamMilk(): void {
    //   console.log("Steaming some milk... 🥛");
    // }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      // this.steamMilk(); // 내부적으로 steamMilk를 이용하는 것이 아니라 외부에서 주입하자
      // return {
      //   ...coffee,
      //   hasMilk: true,
      // };
      return this.milkFrother.makeMilk(coffee); // 우유 거품을 추가해서 새로운 커피 리턴
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }
    // private getSugar() {
    //   console.log("Getting some sugar 🍬");
    // }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      // this.getSugar(); // 내부적으로 getSugar를 이용하는 것이 아니라 외부에서 주입하자
      // return {
      //   ...coffee,
      //   hasSugar: true,
      // };
      return this.sugar.addSugar(coffee);
    }
  }

  /**
   * class SweetCaffeLatteMachine extends SweetCoffeeMaker, CaffeLatteMachine ❌
   * 필요한 기능을 외부에서 가져옴으로써, composition을 이용해 필요한 기능을 재사용
   */
  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }
}

// 클래스와 클래스 간에 긴밀히 관계짓는 것은 좋지 않다! => 다음 강의
