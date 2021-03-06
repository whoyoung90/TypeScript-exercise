{
  /**
   * JavaScript
   * Primitive: number, string, boolean, null, undefined, symbol, bigint
   * Object: function, array.....
   */

  /* undefined */
  let name: undefined; // π©
  let age: number | undefined;
  age = undefined;
  age = 1;


  /* null */
  let person: null; // π©
  let person1: string | null;


  /** 
   * @description λ°μ΄ν°νμ | undefined vs λ°μ΄ν°νμ | null
   * @returns { type | undefined } λ³΄νΈμ μΌλ‘ λ§μ΄ μ¬μ©
   * λ°μ΄ν° νμμ΄ μκ±°λ μμ§ κ²°μ λμ§ μμκ±°λ
   */
  function find(): number | undefined {
    return undefined;
  };


  /* unknown π© μ΄λ€ μ’λ₯κ° λ΄κΈΈμ§ "μ μ μλ€." κ°λ₯νλ©΄ μ°μ§ λ§μ */
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;


  /* any π© μ΄λ€ μ’λ₯λ  "λ€ λ΄μ μ μλ€." κ°λ₯νλ©΄ μ°μ§ λ§μ */
  let anything: any = 0;
  anything = 'he';
  anything = true;


  /* void : μΆλ ₯λ§ νκ³  μλ¬΄κ²λ λ¦¬ν΄νμ§ μλ ν¨μ */
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // π© λ³μμ μ μΈνλ©΄ undefined λ°μ ν λΉ λͺ»ν¨


  /**
   * never : μ λ λ¦¬ν΄νλ©΄ μλλ ν¨μ
   * ν¨μμμ μ λ λ¦¬ν΄λμ§ μλ κ²½μ°λ₯Ό λͺμνκΈ° μν΄ μ¬μ©!
   * "thorwError"λ "λ¬΄νλ£¨ν"μ²λΌ κ³μ λλμ§ μκ² μ½λλ₯Ό μμ±ν΄μΌ νλ€. (return μμ±X)
   * 
   * A function returning 'never' cannot have a reachable end point.ts(2534)
   * = neverλ μ λμ λ λ¦¬ν΄ν  μ μλ€.
   */
  function throwError(message: string): never {
    throw new Error(message);
    while (true) { } // unreachable code detected. ts(7027) => μμ€μμ Errorλ₯Ό λμ§λ―λ‘ λλ¬ν  μ μλ μ½λλ λ»
  };
  let neverEnding: never; // π©


  /* object : μμ νμμ μ μΈν λͺ¨λ  objectνμμ ν λΉν  μ μλ€. (λ°°μ΄λ OK) => κ°λ₯νλ©΄ μ°μ§ λ§μ. */
  function acceptSomeObject(obj: object) {
    // μ΄λ ν objectλ μ λ¬ν  μ μλ€ 
  }
  acceptSomeObject({ name: 'wooyoung' });
  acceptSomeObject({ animal: 'cat' });

  let obj: object = [1, 2]; // π© μ’ λ λͺμν΄μ μμ±!!
}
