{
  /**
   * JavaScript
   * Primitive: number, string, boolean, null, undefined, symbol, bigint
   * Object: function, array.....
   */

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }


  // null
  let person: null; // 💩
  let person1: string | null;


  // unknown 💩 가능하면 쓰지 말자
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;


  // any 💩 가능하면 쓰지 말자
  let anything: any = 0;
  anything = 'he';
  anything = true;


  // void : 아무것도 리턴하지 않는 함수 (return;)
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩



  // never : 절대 리턴하면 안되는 함수 (thorwError | 무한루프)
  function throwError(message: string): never {
    throw new Error(message);
    while (true) { } // unreachable code detected. ts(7027)
  }
  let neverEnding: never; // 💩



  // object : 원시 타입을 제외한 모든 object타입 가능(배열도 OK) => 가능하면 쓰지 말자.
  function acceptSomeObject(obj: object) { }
  acceptSomeObject({ name: 'Eren' });
  acceptSomeObject({ animal: 'cat' });

  let obj: object = [1, 2]; // 💩 좀 더 명시해서 작성!!
}
