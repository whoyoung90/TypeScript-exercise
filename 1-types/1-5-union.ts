{
  /**
   *  Union Types π: |(or) => λ°μν  μ μλ μΌμ΄μ€ μ€μ "νλλ§" μ νκ³  μΆμ λ!
   */
  type Direction = 'left' | 'right' | 'up' | 'down'; // λ¬Έμμ΄ νμμ νμ₯
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');


  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16; // λ€λ₯Έ μ«μλ λ€μ΄μ¬ μ μλ€



  // μμ1) function: login -> success or fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password:  number): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  function login1(id: string, password:  number): LoginState {
    return {
      reason: 'fuck network..'
    }
  }


  // μμ2) printLoginState(state: LoginState)
  // success -> π body
  // fail -> π­ reason 
  function printLoginState(state: LoginState):void {  // voidλ μλ΅ κ°λ₯!
    if ('response' in state) { // π©
      console.log(`π ${state.response.body}`);
    } else {
      console.log(`π­ ${state.reason}`);
    }
  }
}
