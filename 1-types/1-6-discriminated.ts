{
  /* Discriminated Union ✨ OR */
  // 구분하기 쉽도록 union 타입에 "이름이 동일한 프로퍼티"을 선언

  // 1-5-예시1)
  type SuccessState = {
    result: 'success'; // 이름이 동일한 키(result)를 가지고 있지만
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail'; // state에 따라 다른 값 or 타입을 지정.
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function loginSuccess1(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'login success',
      },
    };
  };
  function loginFail1(): LoginState {
    return {
      result: 'fail',
      reason: 'login fail',
    };
  };


  // 1-5-예시2)
  // ('response' in state)보다 휠씬 나은 코드가 된다!
  function printLoginState1(state: LoginState) {
    if (state.result === 'success') { // ✨
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
