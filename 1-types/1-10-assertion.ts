{
  /* Type Assertion 💩 */
  // type이 100% 확실하지 않으면 쓰지 않는다 => 타입스크립트에서 미리 에러 방지 X
  // 실시간으로 어플리케이션이 죽을 수 있음

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

  // 작성할 때는 정상인데, 실행하면 error? JavaScript랑 동일.. 그래서 💩 


  // [2] ! (Optional parameter랑 반대 개념)
  function findNumbers(): number[] | undefined {
    return undefined;
  };
  const numbers = findNumbers();
  // numbers.push(2); // (error) Object is possibly 'undefined'
  numbers!.push(2); // ! 💩 무조건 숫자 배열만 받을거야! undefined이 될 수 없어
  
  const numbers1 = findNumbers()!; // ! 💩
  numbers1.push(2);


  // [3] 그럼에도 Type assertion을 사용하는 경우
  const button = document.querySelector('class'); // querySelector: Element | null
  // console.log(button.nodeValue); // (error) Object is possibly 'null'
  if (button) {
    console.log(button.nodeValue); // 요소가 존재할 때니까 button: Element 
  };

  const button1 = document.querySelector('class')!; // [Type Assertion]
  console.log(button1.nodeValue);

  // !있으면 => button1: Element
  // !없으면 => button1: Element | null
}
