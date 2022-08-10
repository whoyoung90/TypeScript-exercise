{
  /* Type Inference 💩 타입을 명시하지 않으면 자동으로 타입이 결정 */

  // [1] 선언과 동시에 문자열 할당하면 자동으로 string 추론
  let friend = 'wooyoung';
  // friend = 1; // type error


  // [2] Default parameter로 문자열이 할당되었기 때문에 타입을 명시하지 않아도 string 추론
  function print(message = 'hi, there') {
    console.log(message);
  };
  print('hello');
  // print(1); // type error


  // [3] 자동으로 function add(): number 추론
  function add(x: number, y: number) {
    return x + y;
  };
  const result = add(1, 2); // 자동으로 result: number 추론


  // 타입은 정확하게 명시하는 것이 좋다! 특히 Function
}