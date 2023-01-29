{
  /**
   * @description utility type - (1) ReadOnly
   * @returns { Readonly<T>, Partial<T>, Required<T> .. }
   * 이미 typescript내에 사용가능한 utility types들이 내장되어 있다
   *
   * 내부 데이터들이 "더이상 변경되지 않도록" 만들 때 사용!
   */

  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // todo.title = 'jaja'; // Cannot assign to 'title' because it is a read-only property.
  }
}
