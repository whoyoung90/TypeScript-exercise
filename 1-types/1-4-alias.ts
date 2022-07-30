{
  /* Type Alias ✨ 새로운 타입 정의 */
  type Text = string;
  type Num = number;
  const name: Text = 'wooyoung';
  const age: Num = 33;

  type Student = {
    name: string;
    age: number;
  };
  const profile: Student = {
    name: 'wooyoung',
    age: 33,
  };


  /* String Literal Types : 문자열 타입 */
  type Name = 'Kara';
  const herName: Name = 'Kara';
  // const herName1: Name = 'Jane'; // 다른 문자열 못쓴다
  // const hisName: Name = 'Jack'; // 다른 문자열 못쓴다

  type JSON = 'json';
  const axios: JSON = 'json';

  type Bool = true;
  const korea: Bool = true;
  // const japan: Bool = false; // 다른 boolean 못쓴다
}
