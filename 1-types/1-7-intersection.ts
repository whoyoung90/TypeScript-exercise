{
  /**
   * Intersection Types π : &(and) λ€μν νμμ νλλ‘ λ¬Άμ΄μ μ¬μ©! <--> unionμ |
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
