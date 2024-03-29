{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  };
  // TypeScript ✨
  function tsadd(num1: number, num2: number): number {
    return num1 + num2;
  };


  // JavaScript 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  };
  // TypeScript ✨ 
  function tsfetchNum(id: string): Promise<number> { // 숫자 100을 리턴하니까 Promise<number>
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  };



  /* 타입이 정해진 함수 정의 방법 ✨ */
  /** 
   * @description 1. Optional parameter
   * @returns { lastName?: string | undefined  }
   * 인자를 전달하지 않아도 되는 파라미터
   * (전달하지 않으면 undefined)
   */
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Eren', 'Yegar');
  printName('Mikasa'); // expected 2 arguments, but got 1 ts(2554) 문구가 안뜸!
  printName('Ackerman', undefined);


  /** 
   * @description 2. Default parameter
   * @returns { message: string = 'default message' }
   * 아무런 것도 전달하지 않아도 자동적으로 기본 값이 설정되는 파라미터
   * (전달하지 않으면 기본값 설정)
   */
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage(); // expected 1 arguments, but got 0 ts(2554) 문구가 안뜸!

  // 상세 주문 정보에서 검색어 기본값에 활용 👍
  const listOrders = (search: string = "") => {
    console.log(search);
  };
  listOrders();
  listOrders('AQMGQX016922');


  /**
   * @description 3. Rest parameter
   * @returns { ...numbers: number[] }
   * "갯수에 상관없이" "동일한 타입"의 데이터를 함수 인자로 전달할 때
   */
  function addNumbers(...numbers: number[]): number { // A rest parameter must be of an array type. ts(2370)
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2)); // expected 1 arguments, but got 2. ts(2554)
  console.log(addNumbers(1, 2, 3, 4)); // expected 1 arguments, but got 4. ts(2554)
  console.log(addNumbers(1, 2, 3, 4, 5, 0)); // expected 1 arguments, but got 6. ts(2554)

}
