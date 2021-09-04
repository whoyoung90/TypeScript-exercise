/**
 * Type Inference 👎 : 타입을 명시하지 않으면 자동으로 타입이 결정
 */

let friend = 'Armin'; // (Type Inference) 선언과 동시에 문자열 할당 => 자동으로 string type을 유추
// friend = 1; // error

function print(message = 'hi, there') { // Default parameter로 문자열이 할당되었기 때문에 타입을 명시하지 않아도
  console.log(message); // message: string 추론
}
print('hello');
// print(1); // error 

function add(x: number, y: number) { // 자동으로 function add(): number 추론
  return x + y;
}
const result = add(1, 2); // 자동으로 result: number 추론


// 타입은 정확하게 명시하는 것이 좋다! 특히 Function