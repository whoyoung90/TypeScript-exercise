{
  /**
   * @description utility type - (2) Partial
   * @returns { Readonly<T>, Partial<T>, Required<T> .. }
   *
   * 데이터를 "부분적으로" 업데이트할 때 사용! (ex. priority만 업데이트 할 경우)
   */

  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  // ToDo 타입에 있는 것들 중에 "부분적으로" 받을 수 있다!
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };
  const updated = updateTodo(todo, { priority: "low" });
  console.log(updated);

  // {
  //   title: "learn TypeScript",
  //   description: "study hard",
  //   label: "study",
  //   priority: "low",
  // }
}
