{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new OfflineError("no network!");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {} // composition (dependency injection)

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {} // composition (dependency injection)
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
        /**
         * @description Line 15보다는 여기서 catch ✨
         * 예상하지 못한 에러를 handling할 때
         * 어디서 처리하는 것이 의미있는 처리일지 생각해 볼 것!
         */
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  // service.login();

  const app = new App(service);
  app.run();
}
