{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }
  // TypeScript ✨
  function tsadd(num1: number, num2: number): number {
    return num1 + num2;
  }



  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  // TypeScript ✨ 
  function tsfetchNum(id: string): Promise<number> { // 숫자 100을 리턴하니까 Promise<number>
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  } 


  // 타입이 정해진 함수 정의 방법 ✨

  // 1) Optional parameter : 전달하지 않아도 되는 파라미터 (parameter) lastName: String | undefined
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Eren', 'Yegar');
  printName('Mikasa'); // expected 2 arguments, but got 1 ts(2554)
  printName('Ackerman', undefined);



  // 2) Default parameter : 전달하지 않으면 기본 값이 설정되는 파라미터
  function printMessage(message: string = 'Default Message ♥︎') {
    console.log(message);
  }
  printMessage(); // expected 1 arguments, but got 0 ts(2554)



  // 3) Rest parameter : "갯수에 상관없이" 동일한 타입의 데이터를 함수 인자로 전달할 때
  function addNumbers(...numbers: number[]): number {  // A rest parameter must be of an array type ts(2370)
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2)); // expected 1 arguments, but got 2 ts(2554)
  console.log(addNumbers(1, 2, 3, 4)); // expected 1 arguments, but got 4 ts(2554)
  console.log(addNumbers(1, 2, 3, 4, 5, 0)); // expected 1 arguments, but got 6 ts(2554)

}
