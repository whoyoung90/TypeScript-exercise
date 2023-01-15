{
  // Type Alias vs Interface
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  /* 둘다 object 가능 */
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1, // Line 44
  };

  /* 둘다 class 가능 */
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  /**
   * 둘다 Extends 확장 가능
   * interface: 상속을 이용해서 확장
   * type: intersection을 이용해서 확장
   */
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  /**
   * ✅ Interface만 결합 가능
   * interface를 한번 정의했음에도 불구하고
   * 동일한 이름의 interface를 추가 정의하여 둘을 결합해서 사용 가능
   */
  interface PositionInterface {
    z: number;
  }
  // type PositionType {} // Duplicate identifier 'PositionType'.

  /**
   * ✅ Type alias만 computed properties 가능
   * ex) utility, map type, index type
   */
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; // string

  type NumberType = number;
  type Direction = "left" | "right"; // union type (type alias만 가능! interface 불가)
}
