/**
 * @description Module이란? 
 * @returns { export, import }
 * "한 파일안에" 작성되어져 있는 코드를 말한다.
 * (코드를 그 파일 내부에서만 한정할 수 있도록 하는 것)
 * 
 * 모듈화를 이용하면
 * - 파일간에 중복적으로 발생할 수 있는 "이름 충돌 방지"
 * - 서로간의 코드를 분리함으로써 "모듈성 UP" (서로 다른 파일에 있는 것들에 접근 불가)
 * - 모듈간의 "재사용성 UP"
 * 
 * 따로 모듈화해서 작성하지 않으면 
 * 여러가지 파일의 모든 코드들은 global scope로 측정되버린다.
 * 즉, 파일안에 작성된 모든 함수들은 window/global에 전부 등록됨
 */

export function add(a, b) {
  return a + b;
}

export const number = 10;
export function print() {
  console.log('print');
}

/**
 * @description export default
 * import시 중괄호X
 * import시 이름을 마음대로 변경할 수 있다!
 * 한 파일에서 한번만 가능!
 */

/**
 * @description export
 * import시 { 중괄호 }
 * import시 이름을 변경하고 싶다면 { A as B }
 * import시 전부 받아온다면 * as B
 */
