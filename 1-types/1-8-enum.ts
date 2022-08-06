{
  /* Enum 💩 관련된 상수값들을 "하나로 모아서" 타입을 보장 */
  // (결론) Enum보다 "Union type"이 더 안전하다!

  // JavaScript => 관련된 상수들을 정의하는 경우, 서로 연관되어져 있지만 묶을 수 있는 타입이 따로 존재X
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

  // 최대한 Enum에 가깝게 표현할 수 있는 방법은 Object.freeze()
  const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 }); // object는 더이상 수정X
  const dayOfToday = DAYS_ENUM.MONDAY; // 0


  /* --- TypeScript Enum 💩 --- */
  enum Days { 
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  };
  let day: Days = Days.Saturday;
  console.log(Days.Monday); // 0
  console.log(day); // 5

  // Enum에 값을 정하지 않으면 0부터 시작(0 5)
  // Monday = 1로 하면 1부터 시작(1 6)

  // Monday = '월요일'처럼 문자열도 할당 가능
  // 그러나 문자열 할당시, 다음 문자열에 뭐가 올지 모르므로 전부 할당해줘야 된다(월요일 토요일)

  let day1: Days = Days.Tuesday;
  day1 = 100; // 💩 에러가 안 뜬다...
  console.log(day1); // 100 💩 타입 보장X (지정한 타입 외에도 할당되버림..)


  /* --- TypeScript Union Type 👍 --- */
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';

  let day2: DaysOfWeek = 'Monday';
  // day2 = 'wooyoung';  // (error) 👍 타입 보장 (지정한 타입만 할당!)
}

/* Enum을 쓰는 경우? */ 
// 모바일 네이티브 프로그래밍(android 및 ios)
// 네이티브에서는 union타입을 표현할 방법이 없기 때문에 enum을 사용.
// 웹 클라이언트에서 프로그래밍을 하고, 모바일 클라이언트와 소통할 필요가 없다면 enum 대신 "type을 이용"하는 것이 안전하다.