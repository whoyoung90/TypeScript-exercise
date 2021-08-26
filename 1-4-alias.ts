{
  /**
   * Type Aliases : "새로운 타입을 정의"
   */
  type Text = string;
  const firstName: Text = 'Eren'; // const firstName: string = 'Eren';
  const lastName: Text = 'Yegar';

  type Num = number;

  type Student = {
    name: string;
    age: number;
  };
  const SurveyCorps: Student = {
    name: 'Mikasa',
    age: 20,
  };


  /**
   * String Literal Types : 문자열 타입
   */
  type Name = 'Ackerman';
  const herName: Name = 'Ackerman';
  // const hisName: Name = 'Libai'; // 다른 문자열을 못쓴다

  type JSON = 'json';
  const axios: JSON = 'json';

  type Bol = true;
  const korea: Bol = true;
  // const japan: Bol = false; // error
}
