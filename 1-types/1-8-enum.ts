{
  /**
   * Enum ๐ : "๊ด๋ จ๋ ์์๊ฐ๋ค"์ enum์ผ๋ก ๋ฌถ์ด์ ๊ด๋ฆฌ.  (๊ฒฐ๋ก ) Enum๋ณด๋ค "Union type"์ด ๋ ์์ ํ๋ค!
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  // Object.freeze : object๋ฅผ ๊ฝ๊ฝ ์ผ๋ ค์ ์์ ์ด ๋์ด์ ์๋๋๋ก! "ํ๋ฒ๋ง ์ ์"ํ  ์ ์๊ฒ ๋ง๋๋!
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript Enum ๐
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
  // ์๋ฌด ์ค์  ์์ผ๋ฉด 0๋ถํฐ ์์! Monday = 1๋ก ํ๋ฉด 1๋ถํฐ ์์!
  // ๋ฌธ์์ด๋ ์๋์ ์ผ๋ก ํ ๋น ๊ฐ๋ฅํ๋ค(๋ค์ ๋ฌธ์์ด์ด ๋ญ๊ฐ ์ฌ์ง ๋ชจ๋ฅด๋ฏ๋ก ์ผ์ผํ ์๋ ํ ๋น)

  let day: Days = Days.Saturday;
  console.log(day); // 5

  day = Days.Tuesday;
  day = 10; // ๐ฉ ์๋ฌ๊ฐ ์ ๋ฌ๋ค,,,
  console.log(day); // 10 ๐ฉ  // Enum์ ์ฐ๊ฒ๋๋ฉด ํ์์ด ๋ณด์ฅ๋์ง ์๋๋ค,,,



  // Union Type์ผ๋ก ๋์ฒด ๐
  type Days1 = 'Monday' | 'Tuesday' | 'Wednesday';

  let day1: Days1 = 'Monday';
  day1 = 'Wednesday';
  // day1 = 10;  // error! ํ์ ๋ณด์ฅ ๐
}


// Enum์ ์ฐ๋ ๊ณณ? ๋ชจ๋ฐ์ผ ๋ค์ดํฐ๋ธ ํ๋ก๊ทธ๋๋ฐ. ๋ค์ดํฐ๋ธ์์๋ unionํ์์ ํํํ  ๋ฐฉ๋ฒ์ด ์๊ธฐ ๋๋ฌธ์ enum์ ์ฌ์ฉํ๋ค.

// ์น ํด๋ผ์ด์ธํธ์์ ํ๋ก๊ทธ๋๋ฐ์ ํ๊ณ , ๋ชจ๋ฐ์ผ ํด๋ผ์ด์ธํธ์ ์ํตํ  ํ์๊ฐ ์๋ค๋ฉด enum ๋์ ์ "type์ ์ด์ฉ"ํ๋ ๊ฒ์ด ์์ ํ๋ค.