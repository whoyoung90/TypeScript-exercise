{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    // 상속시 상위 class의 constructor는 public 또는 protected로 변경
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

  /**
   * interface를 구현할 때는 implements - class를 상속할 때는 extends
   * 상속시 상위 class의 constuctor는 public(o), protected(o), private(x)
   */
  class CaffeLatteMachine extends CoffeeMachine {
    // 추가적으로 어떤 데이터를 받아올때는 공통적으로 부모 클래스에서도 필요한 beans도 받아와서 super로 전달
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans); // 자식 클래스에서 따로 생성자를 구현하는 경우, 반드시 super 호출
    }
    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }
    // 자식 클래스에서 부모 클래스의 함수를 overwriting
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // super: 부모 class의 함수를 호출!
      this.steamMilk();
      return {
        ...coffee, // 부모꺼 그대로
        hasMilk: true, // 이것만 변경
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, "SSSS");
  const coffee = latteMachine.makeCoffee(1); // CoffeeMachine을 상속했기 때문에 CoffeeMachine내 모든 함수 사용 가능!
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
