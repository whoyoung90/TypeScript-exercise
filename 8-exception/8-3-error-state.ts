{
  /**
   * @description Exception(unexpected) vs Error State(expected)
   *
   * Exception: catch(error)와 같이 예상하지 못한 곳에서 에러가 발생할 때 사용
   * Error State: 세부적인 에러를 결정하고 싶을 때는 Error State를 사용하는게 더 좋다
   */

  // Error State
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout"; // string Union Type
  };
  type SuccessState = {
    result: "success"; // discriminated Union
  };
  type ResultState = SuccessState | NetworkErrorState; // Union Type

  class NetworkClient {
    tryConnect(): ResultState {
      // throw new OfflineError("no network!"); // 예샹하지 못하게 throw를 남발하지 말자
      return {
        result: "success",
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // if (error instanceof OfflineError) {} ❌
        /**
         * @description catch에 전달되는 error는 any type ✨
         * 타입스크립트에서 구현된 catch()에는 어떠한 타입정보도 전달되지 않아서
         * instanceOf를 사용할 수 없다
         */
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);

  const app = new App(service);
  app.run();
}

// 예상 가능한 프로그래밍이란? 내가 예상할 수 있는 상태(성공 or 실패)들을 type으로 정의하는 것
