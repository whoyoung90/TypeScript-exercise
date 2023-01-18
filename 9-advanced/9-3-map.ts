{
  /**
   * @description map type 활용 => 재사용성 증가
   * 기존의 타입에서 다른 타입으로 성질을 변화시킬 수 있다!
   */
  type Optional<T> = {
    [P in keyof T]?: T[P]; // 등록된 타입의 key값이 있어도 되고 없어도 되고! 유용성 UP! ✨
  };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]; // 이 타입을 쓰는 object는 내부 데이터들이 더이상 변경되지 않는다! 유용성 UP! ✨
  };

  type Video = {
    title: string;
    author: string;
  };
  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog", // 하나만 있어도 됨 😉
  };
  animal.name = "ellie";

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
  };
  // video.author = // Cannot assign to 'author' because it is a read-only property.

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null }; // 기존 value 타입을 쓰거나 null이 가능하도록! 유용성 UP! ✨
  const obj2: Nullable<Video> = {
    title: "hi",
    author: null,
  };

  /* typescript 공식문서 참조 */
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
