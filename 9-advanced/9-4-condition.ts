/**
 * @descripton condition type
 * 조건적으로 결정할 수 있는 타입
 */

type Check<T> = T extends string ? boolean : number;
type Type = Check<string>; // boolean

/* typescript 공식문서 참조 */
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

type T0 = TypeName<string>; // "string"
type T1 = TypeName<"a">; // "string"
type T2 = TypeName<() => void>; // "function"
