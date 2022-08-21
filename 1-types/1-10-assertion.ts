{
  /* Type Assertion 💩 */
  // '타입스크립트에서 미리 에러로 출력 못하기 때문에' type이 100% 확실하지 않으면 쓰지 말자

  // [1] result as string 또는 <string>result
  function jsStrFunc(): any {
    return 'hello';
  };
  const result = jsStrFunc();
  console.log(result.length); // 5 (result가 any타입이기 때문에 점찍으면 문자열 api가 뜨지 않는다)
  console.log((result as string).length); // 5 Type Assertion (문자열 api 가능)
  console.log((<string>result).length); // 5 Type Assertion (문자열 api 가능)


  function jsStrFunc1(): any {
    return 2;
  };
  const result1 = jsStrFunc1();
  console.log((result1 as string).length); // undefined
  console.log((<string>result1).length); // undefined


  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // (TypeError) wrong.push is not a function

  // 작성할땐 정상인데, 실행하면 error? JavaScript랑 동일.. 그래서 💩 


  // [2] ! (Optional parameter랑 반대 개념)
  function findNumbers(): number[] | undefined {
    return undefined;
  };
  const numbers = findNumbers();
  // numbers.push(2); // (error) Object is possibly 'undefined'
  numbers!.push(2); // ! 💩 undefined이 아닌 무조건 숫자 배열만 올거라 장담해! (error)
  
  const numbers1 = findNumbers()!; // ! 💩 (error)
  numbers1.push(2); // 💩 (error)


  // [3] ! (100% 확실하면 사용! but 생각치 못한 에러가 많이 나올거임..)
  const button = document.querySelector('class'); // querySelector: Element | null
  // console.log(button.nodeValue); // (error) Object is possibly 'null'

  if (button) {
    console.log(button.nodeValue); // 👍 button: Element 
  };

  const button1 = document.querySelector('class')!; // ! 💩 무조건 Element 이어야! (error)
  console.log(button1.nodeValue); // ! 💩 (error)
}
