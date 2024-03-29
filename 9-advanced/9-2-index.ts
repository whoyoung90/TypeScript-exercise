{
  /**
   * @description index type
   * index를 기반으로 타입을 결정할 수 있다!
   * 다른 타입의 key에 접근해서 그 key의 value 타입을 그대로 다시 선언할 수 있다!
   *
   * keyof ✨
   */

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  const text: Name = "hello";

  type Gender = Animal["gender"]; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender' (string union 생성!)
  const key: Keys = "name";

  type Person = {
    name: string;
    gender: Animal["gender"]; // 'male' | 'female'
  };
  const person: Person = {
    name: "ellie",
    gender: "male",
  };
}
