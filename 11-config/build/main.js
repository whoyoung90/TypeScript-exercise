/**
 * @description 컴파일된 js파일들의 저장 위치 지정
 * @returns { "outDir": "./build" }
 * src 폴더는 build안에 생성되지 않는다
 * => 프로젝트 제일 최상위 루트에서 "첫번째 타입스크립트 파일이 나오는 곳부터" 상위 폴더가 지정되기 때문!
 *
 * @description src 디렉토리 밖에서는 절대 typescript파일을 생성할 수 없도록
 * @returns { "rootDir": "./src" }
 *
 * @description 컴파일 되지 않아야 하는 파일 지정!
 * @returns { "exclude": ["./src/dev.ts"] }
 *
 * @description "원하는 파일만" 컴파일 되도록 지정!
 * @returns { "include": [./src/dev.ts"] }
 */
"use strict";
var Car = /** @class */ (function () {
    function Car() {
        this.engine = 0;
    }
    Car.prototype.move = function () {
        var engine = this.engine + 1;
        console.log("engine🐛");
        console.log(engine);
    };
    return Car;
}());
var car = new Car();
car.move();
//# sourceMappingURL=main.js.map