{
  /**
   * @description map type
   * 기존의 타입을 다른 타입으로 변화시킬 수 있다! 재사용성 ✨
   *
   * type Object 정의 안에서 인덱스 괄호 기호([])를 이용하면
   * for...in처럼 key를 하나씩 돌 수 있다.
   */

  type Video = {
    title: string;
    author: string;
  };

  /* Case 1 ✨ 등록된 타입의 key값이 있어도 되고 없어도 되고! */
  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  const videoOp: Optional<Video> = {
    title: "hi", // 하나만 있어도 됨 😉
  };
  videoOp.title = "hello";

  /* Case 2 ✨ 내부 데이터들이 더이상 변경되지 않는다! */
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
  };
  // video.author = "jobs"; // Cannot assign to 'author' because it is a read-only property.

  /* Case 3 ✨ 기존 value 타입을 쓰거나 null이 가능하도록! */
  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  const obj2: Nullable<Video> = {
    title: "hi",
    author: null,
  };

  /* typescript 공식문서 참조 (타입을 Proxy라는 타입으로 한단계 감싸는 역할) */
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
}

// type VideoOptional = {
//   title?: string;
//   author?: string;
// };

// type VideoReadOnly = {
//   readonly title: string;
//   readonly author: string;
// };

// type VideoNullable = {
//   readonly title: string | null;
//   readonly author: string | null;
// };
