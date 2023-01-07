{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  /* 데이터 정의할때 불변성 유지 => 한번 만들어지면 절대 변경되지 않도록 readonly */
  type StackNode = {
    readonly value: string;
    readonly next?: StackNode; // StackNode | undefined 대신 Optional parameter
  };

  class StackImpl implements Stack {
    private _size: number = 0; // 외부, 내부 변수명이 동일한 경우 => 내부변수를 underscore
    private head?: StackNode;

    get size() {
      return this._size;
    }

    constructor(private capacity: number) {} // 총 stack의 사이즈

    push(value: string) {
      if (this.size === this.capacity) {
        throw new Error("Stack is full!");
      }
      const node: StackNode = { value, next: this.head }; // 새로 생성된 "node"는 head가 가리키고 있던 아이를 가리키도록
      this.head = node; // "head"는 새로 생성된 node를 가리키도록
      this._size++;
    }
    pop(): string {
      /* null, undefined 모두 거르기 (null == undefined) ✨ */
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }
      const node = this.head; // 제거하려는 "node"는 head가 가리키고 있는 아이
      this.head = node.next; // "head"는 node가 가리키는 다음 것을 가리키도록
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(10);
  stack.push("Ellie 1");
  stack.push("Bob 2");
  stack.push("Steve 3");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  // stack.pop(); // stack이 비어있는데 pop시 에러 발생
}
