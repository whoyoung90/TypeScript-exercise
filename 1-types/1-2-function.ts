{
  // JavaScript π©
  function jsAdd(num1, num2) {
    return num1 + num2;
  };
  // TypeScript β¨
  function tsadd(num1: number, num2: number): number {
    return num1 + num2;
  };


  // JavaScript π©
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  };
  // TypeScript β¨ 
  function tsfetchNum(id: string): Promise<number> { // μ«μ 100μ λ¦¬ν΄νλκΉ Promise<number>
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  };



  /* νμμ΄ μ ν΄μ§ ν¨μ μ μ λ°©λ² β¨ */
  /** 
   * @description 1. Optional parameter
   * @returns { lastName?: string | undefined  }
   * μΈμλ₯Ό μ λ¬νμ§ μμλ λλ νλΌλ―Έν°
   * (μ λ¬νμ§ μμΌλ©΄ undefined)
   */
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Eren', 'Yegar');
  printName('Mikasa'); // expected 2 arguments, but got 1 ts(2554) λ¬Έκ΅¬κ° μλΈ!
  printName('Ackerman', undefined);


  /** 
   * @description 2. Default parameter
   * @returns { message: string = 'default message' }
   * μλ¬΄λ° κ²λ μ λ¬νμ§ μμλ μλμ μΌλ‘ κΈ°λ³Έ κ°μ΄ μ€μ λλ νλΌλ―Έν°
   * (μ λ¬νμ§ μμΌλ©΄ κΈ°λ³Έκ° μ€μ )
   */
  function printMessage(message: string = 'Default Message β₯οΈ') {
    console.log(message);
  }
  printMessage(); // expected 1 arguments, but got 0 ts(2554) λ¬Έκ΅¬κ° μλΈ!


  /**
   * @description 3. Rest parameter
   * @returns { ...numbers: number[] }
   * "κ°―μμ μκ΄μμ΄" "λμΌν νμ"μ λ°μ΄ν°λ₯Ό ν¨μ μΈμλ‘ μ λ¬ν  λ
   */
  function addNumbers(...numbers: number[]): number { // A rest parameter must be of an array type. ts(2370)
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2)); // expected 1 arguments, but got 2. ts(2554)
  console.log(addNumbers(1, 2, 3, 4)); // expected 1 arguments, but got 4. ts(2554)
  console.log(addNumbers(1, 2, 3, 4, 5, 0)); // expected 1 arguments, but got 6. ts(2554)

}
