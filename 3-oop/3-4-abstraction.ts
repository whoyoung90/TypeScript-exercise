{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * @description abstraction : 정말 필요한 interface만 노출하여 class를 사용하기 쉽게 만든다. (커피 기계 -> 커피머신)
   * 여러 클래스에 걸쳐서 공통적으로 사용되는 함수들의 규격을 정의함
   * private을 통한 추상화
   * interface를 통한 추상화
   */

  /* interface : "나는 이런 행동을 할 수 있어"를 명시해놓은 계약서 */
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
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

    /* private을 통한 추상화(사용자에게 불필요한 과정은 노출하지 않기!) */
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

  /* class를 타입으로 받을 경우 => object(instance)안에 있는 모든 public 함수들에 접근 가능 */
  const maker1: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker1.fillCoffeeBeans(32);
  maker1.makeCoffee(2);
  maker1.clean();

  /* interface로 타입을 제한해서 받을 경우 => interface에 정의된 아이들만 사용할 수 있다 */
  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.makeCoffee(2); // fillCoffeeBeans, clean은 없는 규약이므로 에러

  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker3.fillCoffeeBeans(32);
  maker3.makeCoffee(2);
  maker3.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2); // interface 기능이 하나
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
      console.log(coffee);
    }
  }

  /**
   * 동일한 Object의 instance일지라도
   * 이 Object는 두가지의 interface를 구현하기 때문에
   * AmateurUser와 ProBarista는 class CoffeeMachine을 받아오는 것이 아니라
   * 각자의 interface를 생성자에서 받아오는 것이다!
   * 즉 interface에서 규약된 함수들만 접근이 가능하다
   *
   * AmateurUser와 ProBarista는 interface가 어떻게 구현되어 있는지 신경쓰지 않고
   * interface에서 규약된 함수들만 이용해서 생성된 object와 의사소통 할 수 있다.
   * (this.machine.✨)
   *
   * 사용하는 사용자들은 class의 다른 복잡한 기능을 알 필요없이 interface 사용 유무만 알면 됨!
   */
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker); // fillCoffeeBeans, clean 추가
  amateur.makeCoffee();
}
