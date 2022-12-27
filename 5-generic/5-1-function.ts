{
  // type number만 핸들링 가능 💩
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // 어떤 타입을 넣어도 무조건 type any 💩 (타입 보장x)
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123); // const result: any

  /**
   * @description Generic ✨
   * 어떤 타입이든 받을 수 있다.
   * "사용할 때 타입이 결정"되므로 => 타입 보장 GOOD!
   * 사용하는 사람이 타입을 결정할 수 있다 (유연하지만 타입 보장)
   */
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number = checkNotNull(123); // const number: 123
  const boal: boolean = checkNotNull(true); // const boal: true -> 구체적으로 수정 const boal: boolean
}
