{
  /**
   * JavaScript
   * Primitive: number, string, boolean, null, undefined, symbol, bigint
   * Object: function, array.....
   */

  /* undefined */
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;


  /* null */
  let person: null; // 💩
  let person1: string | null;


  /** 
   * @description 데이터타입 | undefined vs 데이터타입 | null
   * @returns { type | undefined } 보편적으로 많이 사용
   * 데이터 타입이 있거나 아직 결정되지 않았거나
   */
  function find(): number | undefined {
    return undefined;
  };


  /* unknown 💩 어떤 종류가 담길지 "알 수 없다." 가능하면 쓰지 말자 */
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;


  /* any 💩 어떤 종류든 "다 담을 수 있다." 가능하면 쓰지 말자 */
  let anything: any = 0;
  anything = 'he';
  anything = true;


  /* void : 출력만 하고 아무것도 리턴하지 않는 함수 */
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩 변수에 선언하면 undefined 밖에 할당 못함


  /**
   * never : 절대 리턴하면 안되는 함수
   * 함수에서 절대 리턴되지 않는 경우를 명시하기 위해 사용!
   * "thorwError"나 "무한루프"처럼 계속 끝나지 않게 코드를 작성해야 한다. (return 작성X)
   * 
   * A function returning 'never' cannot have a reachable end point.ts(2534)
   * = never는 절대절대 리턴할 수 없다.
   */
  function throwError(message: string): never {
    throw new Error(message);
    while (true) { } // unreachable code detected. ts(7027) => 윗줄에서 Error를 던지므로 도달할 수 없는 코드란 뜻
  };
  let neverEnding: never; // 💩



  /* object : 원시 타입을 제외한 모든 object타입을 할당할 수 있다. (배열도 OK) => 가능하면 쓰지 말자. */
  function acceptSomeObject(obj: object) {
    // 어떠한 object도 전달할 수 있다 
  }
  acceptSomeObject({ name: 'wooyoung' });
  acceptSomeObject({ animal: 'cat' });

  let obj: object = [1, 2]; // 💩 좀 더 명시해서 작성!!
}
