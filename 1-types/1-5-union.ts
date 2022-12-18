{
  /* Union Type ✨ OR */
  // 발생할 수 있는 케이스 중 "하나만" 할당하고 싶을 때
  type Direction = "left" | "right" | "up" | "down"; // 문자열 타입의 확장
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16; // 다른 숫자는 들어올 수 없다

  // 예시1) function login() -> success or fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function loginSuccess(id: string, password: string): LoginState {
    return {
      response: {
        body: "login success",
      },
    };
  }
  function loginFail(id: string, password: string): LoginState {
    return {
      reason: "login fail",
    };
  }

  // 예시2) printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState): void {
    // void는 생략 가능!
    if ("response" in state) {
      // 💩
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
