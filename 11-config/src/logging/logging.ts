/**
 * @description 특정 타입스크립트 파일을 자바스크립트로 변경
 * @returns { tsc src/logging/logging.ts -w }
 *
 * @description tsconfig가 있는 폴더의 "모든" 타입스크립트를 자바스크립트로 변경
 * @returns { tsc -w }
 *
 * @description tsconfig.json 파일 생성 (여러 파일을 동시에 실행하고 좀더 다양한 옵션을 주기 위해)
 * @returns { tsc --init }
 */

console.log("hello!");
