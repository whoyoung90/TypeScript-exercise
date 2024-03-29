{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7; // 1샷에 7그램
  let coffeeBeans: number = 0; // 커피빈 그램수

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots, // key value 이름이 동일하면 생략 가능
      hasMilk: false,
    };
  }

  /* 커피빈 충전 */
  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;

  const coffee = makeCoffee(2);
  console.log(coffee);
}
