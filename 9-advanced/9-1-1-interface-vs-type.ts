{
  /**
   * @description Interface
   * 특정한 "규격사항"을 정의하거나, 이 규격을 통해서 어떤 것(class)을 구현할 목적으로 사용
   */
  interface CoffeeMaker {
    coffeeBeans: number;
    makeCoffee: (shots: number) => void; // 그래서 보통 메서드는 interface에 있음!
  }
  class CoffeeMachine implements CoffeeMaker {
    coffeeBeans: number;
    makeCoffee(shots: number) {
      return {};
    }
  }

  /**
   * @description Type Alias
   * "어떤 데이터를 담을 때" 데이터의 모습 및 타입을 결정
   */
  type Position = {
    x: number;
    y: number;
  };
  const pos: Position = { x: 0, y: 0 };
}

/**
 * @description [interface vs type] props와 state는?
 * @returns { type }
 * 저는 타입(type)이 더 Props과 State에 사용하기 적합하다고 생각해요.
 * 강의에서 언급한 내용 외에도, 그냥 문장으로만 놓고 봐도
 *
 * 이 컴포넌트에 전달할 수 있는 Props 타입으로는 이 타입이다. (🙆‍♀️)
 * 이 컴포넌트에 전달할 수 있는 Props 타입으로는 이 인터페이스이다. (❓)
 *
 * 이 클래스는 이 인터페이스를 구현한다 (🙆‍♀️)
 * 이 클래스는 이 타입을 구현한다 (❓)
 *
 * 비슷한 고민을 하되, 설명할 수 있는 이유가 있으면 선택해서 쓰면 된다!
 */

/**
 * @description [interface vs type] 프론트엔드와 서버 간의 API response는?
 * @returns { type }
 * 클라이언트와 서버가 주고 받는 "데이터"죠 (타입)!
 * 특정한 행위를 하는 (함수가 들어있는) 규격(인터페이스)이 아니라 :)
 */
