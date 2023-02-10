/**
 * @description Module이란? 
 * @returns { export, import }
 * "한 파일안에" 작성되어져 있는 코드
 * (코드를 그 파일 내부에서만 한정하도록 하는 것)
 * 
 * 모듈화를 하지 않으면
 * 파일마다 작성된 모든 코드들이 전부 window/global에 등록 (전부 global scope로 측정)
 * 파일마다 혹은 라이브러리에 동일한 이름의 함수가 발생하면? 이름 충돌 😱
 * 
 * 모듈화를 이용하면
 * - 파일간에 중복적으로 발생할 수 있는 "이름 충돌 방지"
 * - 서로간의 코드를 분리함으로써 "모듈성 UP" (서로 다른 파일에 있는 것들에 접근 불가)
 * - 모듈간의 "재사용성 UP"
 */

export function add(a, b) {
  return a + b;
}
export function print() {
  console.log('print');
}
export const number = 10;

/**
 * @description export default
 * import시 중괄호X
 * import시 이름을 변경할 수 있다!
 * 한 파일내에서 default는 한번만 가능!
 */

/**
 * @description export
 * import시 { 중괄호 }
 * import시 굳이 이름을 변경하고 싶다면 { A as B }
 * import시 전부 받아온다면 * as B
 */
