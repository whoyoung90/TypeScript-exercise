{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`full time!!`);
    }
    workFullTime() {}
  }
  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`part time!!`);
    }
    workPartTime() {}
  }

  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  ellie.pay();
  bob.pay();
  ellie.workFullTime();
  bob.workPartTime();

  /* ❌ "다시 Employee만 리턴되기 때문에" 세부 클래스의 정보를 잃어버린다! */
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }
  const ellieAfterPayBad = payBad(ellie);
  const bobAfterPayBad = payBad(bob);
  ellieAfterPayBad.pay();
  bobAfterPayBad.pay();
  // ellieAfterPayBad.workFullTime(); // ❌
  // bobAfterPayBad.workPartTime(); // ❌

  /**
   * ✅ 세부적인 조건 constrains(1)
   * 아무 타입이나 다 되는건 아니고 <T extends Employee>만 가능하도록!
   * Generic이긴 한데, 타입은 extends Employee만 가능해!
   *
   * Generic도 조건들을 걸어둠으로써 좀더 제한적인 범위 내에서 일반화된 Generic을 이용할 수 있다
   */
  function payGood<T extends Employee>(employee: T): T {
    employee.pay(); // <extends Employee>를 추가해야 .pay() 가능!! Property 'pay' does not exist on type 'T'.
    return employee;
  }
  const ellieAfterPay = payGood(ellie);
  const bobAfterPay = payGood(bob);
  ellieAfterPay.pay();
  bobAfterPay.pay();
  ellieAfterPay.workFullTime();
  bobAfterPay.workPartTime();
}
