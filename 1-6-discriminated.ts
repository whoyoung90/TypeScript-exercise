{
  /**
   *  Discriminated Union 👍 : OR => union 타입에 "이름이 동일한 프로퍼티"을 두고 구분하기 쉽게 만든다!
   */
  // 1-5-예시1)
  type SuccessState = {
    result: 'success'; // 이름이 동일한 키(result)를 가지고 있지만
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail'; // state에 따라 다른 타입이 지정되어 있다.
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login2(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  function login3(): LoginState {
    return {
      result: 'fail',
      reason: 'fuck network..'
    }
  }


  // 1-5-예시2)
  // state.result 👉 success or fail
  // ('response' in state)보다 휠씬 나은 코드가 가능하다!
  function printLoginState1(state: LoginState) {
    if (state.result === 'success') { // ✨
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
