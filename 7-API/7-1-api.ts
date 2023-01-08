Array;
[1, 2].map;

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

/* Sub-Type 예제 */
class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}
const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
// 콜백함수 isCat
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
console.log(animals.every<Cat>(isCat)); // false

/* 참고 */
export interface IEditorAction {
  readonly id: string;
  readonly label: string;
  readonly alias: string;
  isSupported(): boolean;
  run(): Promise<void>; // run은 호출시, IEditorAction이 끝날때까지 기다리는 동기가 아닌 비동기
}
