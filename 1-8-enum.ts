{
  /**
   * Enum 👎 : "관련된 상수값들"을 enum으로 묶어서 관리.  (결론) Enum보다 "Union type"이 더 안전하다!
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  // Object.freeze : object를 꽁꽁 얼려서 수정이 더이상 안되도록! "한번만 정의"할 수 있게 만드는!
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript Enum 👎
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday); // 0
  // 아무 설정 없으면 0부터 시작! Monday = 1로 하면 1부터 시작!
  // 문자열도 수동적으로 할당 가능하다(다음 문자열이 뭐가 올지 모르므로 일일히 수동 할당)

  let day: Days = Days.Saturday;
  console.log(day); // 5

  day = Days.Tuesday;
  day = 10; // 💩 에러가 안 뜬다,,,
  console.log(day); // 10 💩  // Enum을 쓰게되면 타입이 보장되지 않는다,,,



  // Union Type으로 대체 👍
  type Days1 = 'Monday' | 'Tuesday' | 'Wednesday';

  let day1: Days1 = 'Monday';
  day1 = 'Wednesday';
  // day1 = 10;  // error! 타입 보장 👍
}


// Enum을 쓰는 곳? 모바일 네이티브 프로그래밍. 네이티브에서는 union타입을 표현할 방법이 없기 때문에 enum을 사용한다.

// 웹 클라이언트에서 프로그래밍을 하고, 모바일 클라이언트와 소통할 필요가 없다면 enum 대신에 "type을 이용"하는 것이 안전하다.