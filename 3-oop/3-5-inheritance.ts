{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    // 상속시 상위 클래스 constuctor는 public 또는 protected로 변경 🅰️
    // cannot extend a class 'CoffeeMachine'. Class constructor is marked as private. (line 64)
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

  // 🅰️
  class CaffeLatteMachine extends CoffeeMachine {
    /* 데이터를 추가적으로 더 받기 위해(serialNumber), 자식 클래스에서 "따로" constructor를 구현하는 경우 => 반드시 super 호출 */
    // Constructors for derived classes must contain a 'super' call.
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      super(coffeeBeans); // 공통적으로 부모 클래스에서도 필요한 coffeeBeans도 받아와서 super로 전달
    }

    private steamMilk(): void {
      console.log("Steaming some milk... 🥛");
    }

    /* 자식 클래스에서 부모 클래스의 함수를 overwriting */
    makeCoffee(shots: number): CoffeeCup {
      /* super: 부모 class의 함수를 호출 */
      const coffee = super.makeCoffee(shots); // 자식에서 부모의 함수를 이용 (grindBeans, preheat, extract)
      this.steamMilk();
      return {
        ...coffee, // 부모꺼 그대로
        hasMilk: true, // 이것만 변경
      };
    }
  }

  const machine = new CoffeeMachine(23); // public constructor이므로 new 생성자 가능!
  const latteMachine = new CaffeLatteMachine(23, "SSSS");
  const coffee = latteMachine.makeCoffee(1); // CoffeeMachine을 상속했기 때문에 CoffeeMachine내 모든 함수 사용 가능!
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
