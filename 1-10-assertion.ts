{
  /**
   * Type Assertions 💩 : type이 정말 100% 상황일 때 아니면 쓰지 않는다.
   */
  // 1.
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  console.log(result.length); // result: any이기 때문에 문자열 타입 API를 사용할 수 없다..(점 찍으면 안뜸)
  console.log((result as string).length);
  console.log((<string>result).length); // 변수 result를 문자열처럼 사용!



  function jsStrFunc1(): any {
    return 2;
  }
  const result1 = jsStrFunc1();
  console.log((result1 as string).length); // undefined
  console.log((<string>result1).length); // undefined


  // 2.
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // (TypeError) wrong.push is not a function

  // 작성할 때는 정상인데, 실행하면 error? JavaScript랑 동일.. 그래서 💩 

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // numbers.push(2); // (error) Object is possibly 'undefined'
  numbers!.push(2); // ! 무조건 숫자 배열만 받을거야!   <--->  Optional parameter랑 반대 개념
  
  const numbers1 = findNumbers()!; // !
  numbers1.push(2);


  // 3.
  const button = document.querySelector('class'); // querySelector는  E | null
  if(button) {
    button.nodeValue;
  }

  const button1 = document.querySelector('class')!;

}
