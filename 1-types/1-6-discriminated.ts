{
  /**
   *  Discriminated Union π : OR => union νμμ "μ΄λ¦μ΄ λμΌν νλ‘νΌν°"μ λκ³  κ΅¬λΆνκΈ° μ½κ² λ§λ λ€!
   */
  // 1-5-μμ1)
  type SuccessState = {
    result: 'success'; // μ΄λ¦μ΄ λμΌν ν€(result)λ₯Ό κ°μ§κ³  μμ§λ§
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail'; // stateμ λ°λΌ λ€λ₯Έ νμμ΄ μ§μ λμ΄ μλ€.
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


  // 1-5-μμ2)
  // state.result π success or fail
  // ('response' in state)λ³΄λ€ ν μ¬ λμ μ½λκ° κ°λ₯νλ€!
  function printLoginState1(state: LoginState) {
    if (state.result === 'success') { // β¨
      console.log(`π ${state.response.body}`);
    } else {
      console.log(`π­ ${state.reason}`);
    }
  }
}
