{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network

  /*  대게 유니온 타입경우 여러 케이스별로 다른 로직을 적용할때는 switch가 더 좋아요. */
  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case 'loading':
        console.log(`👀 ${state.state}...`);
        break;
      case 'success':
        console.log(`😃 ${state.response.body}`);
        break;
      case 'fail':
        console.log(`😱 ${state.reason}`);
        break;
      default:
        throw new Error(`unknown state: ${state}`);
    };
  };

  // function printLoginState(state: ResourceLoadState) {
  //   if (state.state === 'loading') {
  //     return console.log(`👀 ${state.state}...`);
  //   }
  //   else if (state.state === 'success') {
  //     return console.log(`😃 ${state.response.body}`);
  //   }
  //   else if (state.state === 'fail') {
  //     return console.log(`😱 ${state.reason}`);
  //   } else {
  //     throw new Error(`unknown state: ${state}`);
  //   };
  // };
}
