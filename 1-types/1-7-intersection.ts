{
  /* Intersection Type ✨ AND */
  // 다양한 타입을 하나로 묶어서 사용 <-> union은 or
  type Student = {
    name: string;
    score: number;
  };
  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.score, person.employeeId, person.work());
  };

  // 함수 호출시 모든 데이터가 들어있는 object를 전달해야 한다.
  internWork({
    name: 'wooyoung',
    score: 5,
    employeeId: 901015,
    work: () => {},
  });
}
