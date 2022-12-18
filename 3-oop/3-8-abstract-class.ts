{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  /**
   * abstract class => 자체적으로 object를 생성할 수 없는 추상적인 클래스 🅰️
   * 공통적인 기능들이 있다면, 그런 기능들은 다 구현
   * 이걸 구현하는 클래스마다 달라져야 하는 내용이 있다면, 그 부분만 "abstract 메서드"로 정의 🅱️
   */
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    /* Cannot create an instance of an abstract class. 🅰️ */
    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

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

    /**
     * 🅱️ abstract method
     *
     * 자식 클래스마다 다르게 구현해야 하므로 private -> protected 변경
     * ('private' modifier cannot be used with 'abstract' modifier.)
     * 추상적인 메소드이기 때문에, 구현사항을 전부 제거! 선언만 하자!
     */
    protected abstract extract(shots: number): CoffeeCup;
    // console.log(`Pulling ${shots} shots... ☕️`);
    // return {
    //   shots,
    //   hasMilk: false,
    // };

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    // makeCoffee(shots: number): CoffeeCup {
    //   const coffee = super.makeCoffee(shots);
    //   this.steamMilk();
    //   return {
    //     ...coffee,
    //     hasMilk: true,
    //   };
    // }
    /* 🅱️ abstract method */
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    // makeCoffee(shots: number): CoffeeCup {
    //   const coffee = super.makeCoffee(shots);
    //   return {
    //     ...coffee,
    //     hasSugar: true,
    //   };
    // }
    /* 🅱️ abstract method */
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  /**
   * ✅ CoffeeMachine은 abstract class이므로, 이것으로 구현한 class만 만들 수 있다!
   * (Cannot create an instance of an abstract class)
   */
  const machines: CoffeeMaker[] = [
    // new CoffeeMachine(16), // ✅
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
    // new CoffeeMachine(16), // ✅
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log("-------------------------");
    machine.makeCoffee(1);
  });
}

/**
 * 상속을 이용할 때
 * abstract class를 이용하면
 * 좀더 안전하게 우리가 의도한대로 공통적인 기능들을 수행하고
 * 달라져야하는 기능들만 상속하는 클래스에게 전달!
 */
