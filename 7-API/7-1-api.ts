type Student = {
  passed: boolean;
};
const students: Student[] = [
  { passed: true },
  { passed: true },
  { passed: false },
];
const result = students.every((student) => {
  return student.passed;
});
console.log(result); // false

/* is-Type 예제 */
class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}
const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

// 콜백함수 isCat => 배열안의 value값이 Cat 타입인지 아닌지 확인 (value is Cat만 리턴)
function isCat(value: Animal): value is Cat {
  return (value as Cat).isCat !== undefined; // value를 Cat으로 캐스팅한 뒤, isCat이 있는지 여부 => Cat이라는 의미!
}
// every<Cat>: every가 Cat 타입인지 아닌지
console.log(animals.every<Cat>(isCat)); // false

/* 참고 */
export interface IEditorAction {
  readonly id: string;
  readonly label: string;
  readonly alias: string;
  isSupported(): boolean;
  run(): Promise<void>; // run은 호출시, IEditorAction이 끝날때까지 기다리는 동기가 아닌 비동기
}
