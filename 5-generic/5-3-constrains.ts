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

/* 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩 */
// function payBad(employee: Employee): Employee {
//   employee.pay();
//   return employee;
// }
/**
 * @desciption Generic도 "extends Employee"와 같은 조건을 걸어두어
 * 좀더 제한적인 범위 내에서 일반화된 Generic을 이용할 수 있다
 */
function pay<T extends Employee>(employee: T): T {
  employee.pay(); // extends Employee 조건을 추가해야 .pay()가능
  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "🐕",
};

console.log(getValue(obj, "name")); // ellie
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🐕

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
