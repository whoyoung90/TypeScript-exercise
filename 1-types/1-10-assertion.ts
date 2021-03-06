{
  /**
   * Type Assertions ๐ฉ : type์ด ์ ๋ง 100% ์ํฉ์ผ ๋ ์๋๋ฉด ์ฐ์ง ์๋๋ค.
   */

  // 1.
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  console.log(result.length); // result: any์ด๊ธฐ ๋๋ฌธ์ ๋ฌธ์์ด ํ์ API๋ฅผ ์ฌ์ฉํ  ์ ์๋ค..(์  ์ฐ์ผ๋ฉด ์๋ธ)
  console.log((result as string).length);
  console.log((<string>result).length); // ๋ณ์ result๋ฅผ ๋ฌธ์์ด์ฒ๋ผ ์ฌ์ฉ!



  function jsStrFunc1(): any {
    return 2;
  }
  const result1 = jsStrFunc1();
  console.log((result1 as string).length); // undefined
  console.log((<string>result1).length); // undefined


  // 2.
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // (TypeError) wrong.push is not a function

  // ์์ฑํ  ๋๋ ์ ์์ธ๋ฐ, ์คํํ๋ฉด error? JavaScript๋ ๋์ผ.. ๊ทธ๋์ ๐ฉ 

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // numbers.push(2); // (error) Object is possibly 'undefined'
  numbers!.push(2); // ! ๋ฌด์กฐ๊ฑด ์ซ์ ๋ฐฐ์ด๋ง ๋ฐ์๊ฑฐ์ผ! undefined์ด ๋  ์ ์์ด ๐ฉ  <--->  Optional parameter๋ ๋ฐ๋ ๊ฐ๋
  
  const numbers1 = findNumbers()!; // ! ๐ฉ
  numbers1.push(2);


  // 3. ๊ทธ๋ผ์๋ Type assertion์ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ
  const button = document.querySelector('class'); // querySelector:  Element | null
  // button.nodeValue // Object is possibly 'null'.ts(2531)
  if(button) {
    button.nodeValue; // ์์๊ฐ ์กด์ฌํ  ๋๋๊น button: Element 
  }

  const button1 = document.querySelector('class')!; // ์ ๋ง์ ๋ง ์์ด! ์ฅ๋ดํ  ์ ์์ด!

  // !์์ผ๋ฉด => button1: Element
  // !์์ผ๋ฉด => button1: Element | null

}
