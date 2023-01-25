{
  /**
   * @description utility type - (1) ReadOnly
   * @returns { Readonly<T>, Partial<T>, Required<T> .. }
   *
   * 이미 typescript내에 사용가능한 utility types가 내장되어 있다!
   */

  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // todo.title = 'jaja'; // Cannot assign to 'title' because it is a read-only property.
  }
}

// -? 👉 Optional(?:)과 반대로 "절대적으로 있어야 하는것"
