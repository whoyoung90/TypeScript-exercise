// either: a or b
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

/* 사용자가 같은 타입으로 쓸 수도 있고, 다른 타입으로 쓸 수도 있기 때문에! */
class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

// 어떤 타입이든 쓰는 사람이 결정해서 만들 수 있다
const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5

const best = new SimpleEither(4, "hello");
const best1 = new SimpleEither({ name: "ellie" }, "hello");

/**
 * 특정 타입으로 지정하면 에러!
 * Type 'number' is not assignable to type 'L'.
 * 'L' could be instantiated with an arbitrary type which could be unrelated to 'number'.
 */
