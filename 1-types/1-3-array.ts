{
  /* Array */
  const fruits: string[] = ['๐', '๐'];
  const scores: Array<number> = [1, 3, 4];

  /**
   * @description string[] vs Array<string> ์ฐจ์ด
   * @returns { readonly ๊ฐ๋ฅ ์ฌ๋ถ }
   * readonly string[] O
   * readonly Array<string> X
   * ๋ถ๋ณ๊ฐ์ฒด๋ฅผ ๋ณด์ฅํด์ฃผ๋ readonly๋ ์์ฃผ ์ฌ์ฉ๋๋ฏ๋ก, ์ผ๊ด์ฑ ์๋ ์ฝ๋๋ฅผ ์ํด string[]์ด ๋ ์ข๋ค!
   */
  function printArray(fruits: readonly string[]) {
    // fruits.push  // Property 'push' does not exist on type 'readonly string[]'. ts(2339)
  }


  /* Tuple ๐ฉ ์๋ก ๋ค๋ฅธ ํ์์ ๊ฐ์ง ์ ์๋ ๋ฐฐ์ด */
  // => interface, type alias, class๋ก ๋์ฒดํด์ ์ฌ์ฉํ์!
  let student: [string, number];
  student = ['wooyoung', 33];
  student[0]; // wooyoung
  student[1]; // 33

  // [0][1] ์ธ๋ฑ์ค๋ก ์ ๊ทผํ๋๊ฑด ๊ฐ๋์ฑ์ด ๋จ์ด์ง.
  // ํด๊ฒฐ์ฑ์? ์ฌ์ฉ์๊ฐ ์ด๋ฆ์ ์ ์

  /* ๊ตฌ์กฐ ๋ถํด ํ ๋น(object destructuring) */
  const [name, age] = student;
  name; // wooyoung
  age; // 33


  /**
   * @description useState๋ Tuple ํ์ฉ โจ
   * React์์๋ ๋ฆฌํด ํ์์ Tuple์ ์ด์ฉํด์ ์ ์
   * @returns { [S, Dispatch<SetStateAction<S>>] } = useState();
   * (1) ๋ฐฐ์ด์ ์ฒซ๋ฒ์งธ ํ์๊ณผ ๋๋ฒ์งธ ํ์์ด ๋ค๋ฅด๊ธฐ ๋๋ฌธ์
   * (2) ์ฌ์ฉ์๊ฐ ์ด๋ฆ์ ์ ์ํด์ ์ธ ์ ์๊ธฐ ๋๋ฌธ์
   */

  // const [count, setCount] = useState(0); 
  // (1) '์๋ก ๋ค๋ฅธ ํ์'์ ๋์ ์ผ๋ก ๋ฆฌํด
  // (2) '์ฌ์ฉ์๊ฐ ์ด๋ฆ์ ์ ์'ํด์ ์ธ ์ ์๋๋ก

  /* Tuple ์ฌ์ฉ์ฒ -> class๋ interface๋ก ๋ฌถ๊ธฐ๋ ์ ๋งคํ..
  ๋์ ์ผ๋ก ๊ด๋ จ์๋ '๋ค๋ฅธ ํ์'์ ๋ฐ์ดํฐ๋ฅผ ๋ฌถ์ด '์ฌ์ฉ์๊ฐ ์ด๋ฆ์ ์ ์'ํด์ ์ธ ๊ฒฝ์ฐ */
}