{
  // number type만 핸들링 💩
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // 어떤 타입을 넣어도 무조건 any type 출력 => 타입정보 사라짐 💩
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
   * 이것을 쓸때 타입이 결정되므로 타입을 보장!
   * 사용하는 사람이 어떤 타입인지 결정할 수 있다 (유연하지만 타입 보장)
   */
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number = checkNotNull(123); // const number: 123
  const boal: boolean = checkNotNull(true); // const boal: true -> const boal: boolean
}
