{
  /**
   * Array
   */
  const fruits: string[] = ['🍅', '🍌'];
  const scores: Array<number> = [1, 3, 4];

  function printArray(fruits: readonly string[]) { // readonly : 불변 객체 보장!!   string[] 가능 | Array<string> 불가능
    // fruits.push  // 에러 발생
  }


  /**
   * Tuple 💩 -> 서로 다른 타입을 가질 수 있는 배열
   */ 
  //interface, type alias, class로 대체해서 사용해라!
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123

  const [name, age] = student; // 구조 분해 할당(object destructuring): student[0]에 name을, student[1]에 age를 할당!
}
  // Tuple은 useState API와 비슷하다! 서로 다른 타입을 동적으로 리턴
  // const [count, setCount ] = useState(0);

  // Tuple 사용처 -> class나 interface로는 애매한.. "동적으로 관련있는 다른 타입의 데이터"를 묶어서 쓸 경우