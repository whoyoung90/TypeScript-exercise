{
  /* Array */
  const fruits: string[] = ['🍅', '🍌'];
  const scores: Array<number> = [1, 3, 4];

  /**
   * @description string[] vs Array<string> 차이
   * @returns { readonly 가능 여부 }
   * readonly string[] O
   * readonly Array<string> X
   * 불변객체를 보장해주는 readonly는 자주 사용되므로, 일관성 있는 코드를 위해 string[]이 더 좋다!
   */
  function printArray(fruits: readonly string[]) {
    // fruits.push  // Property 'push' does not exist on type 'readonly string[]'. ts(2339)
  }


  /* Tuple 💩 서로 다른 타입을 가질 수 있는 배열 */
  // => interface, type alias, class로 대체해서 사용하자!
  let student: [string, number];
  student = ['wooyoung', 33];
  student[0]; // wooyoung
  student[1]; // 33

  // [0][1] 인덱스로 접근하는건 가독성이 떨어짐.
  // 해결책은? 사용자가 이름을 정의

  /* 구조 분해 할당(object destructuring) */
  const [name, age] = student;
  name; // wooyoung
  age; // 33


  /**
   * @description useState도 Tuple 활용 ✨
   * React에서는 리턴 타입을 Tuple을 이용해서 정의
   * @returns { [S, Dispatch<SetStateAction<S>>] } = useState();
   * (1) 배열안 첫번째 타입과 두번째 타입이 다르기 때문에
   * (2) 사용자가 이름을 정의해서 쓸 수 있기 때문에
   */

  // const [count, setCount] = useState(0); 
  // (1) '서로 다른 타입'을 동적으로 리턴
  // (2) '사용자가 이름을 정의'해서 쓸 수 있도록

  /* Tuple 사용처 -> class나 interface로 묶기는 애매한..
  동적으로 관련있는 '다른 타입'의 데이터를 묶어 '사용자가 이름을 정의'해서 쓸 경우 */
}