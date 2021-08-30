{
  /**
   * Intersection Types: &(and) 다양한 타입을 하나로 묶어서 사용! <--> union은 |
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) { // &
    console.log(person.name, person.score, person.empolyeeId, person.work());
  }

  internWork({
    name: 'Eren',
    score: 90,
    empolyeeId: 12345,
    work: () => {},
  });
}
