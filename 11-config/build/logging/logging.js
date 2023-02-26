"use strict";
/**
 * @description 특정 타입스크립트 파일을 자바스크립트로 변경
 * @returns { tsc src/logging/logging.ts -w }
 *
 * @description tsconfig.json 파일 생성 (여러 파일을 동시에 실행하고 다양한 옵션을 주기 위해)
 * @returns { tsc --init }
 *
 * @description tsconfig.json이 있는 프로젝트의 "모든" 타입스크립트를 자바스크립트로 변경
 * @returns { tsc -w } tsconfig.json 설정대로 변경!
 */
console.log("hello!");
//# sourceMappingURL=logging.js.map