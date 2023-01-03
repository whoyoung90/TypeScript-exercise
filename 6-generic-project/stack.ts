/* Generic을 이용할때는 interface, class, function 정의부분에서 <T>로 정의! */
interface Stack<T> {
  // Stack이라는 interface는 T라는 타입을 받는다
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  // type StackNode는 <T>를 정의
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }
  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    /* head에 타입이 명시되어있기 때문에(Line 17) 타입 추론 활용! */
    // const node: StackNode<T> = { value, next: this.head }; // 명확한 부분에서는 타입 정보 생략
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    if (this.head == null) {
      throw new Error("Stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

/* 인스턴스를 생성할때 따로 타입을 명시하지 않으면 unknown 👉 <string> 정의 */
const stack = new StackImpl<string>(10);
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("Steve 3");
while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(123);
stack2.push(456);
stack2.push(789);
while (stack2.size !== 0) {
  console.log(stack2.pop());
}

/**
 * 재사용성이 필요하면 Generic ✨
 * 타입이 보장되면서 좀더 다양한 데이터를 담을 수 있다
 */
