{
  class User1 {
    firstName: string;
    lastName: string;
    fullName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`;
    }
  }
  const user = new User1("Steve", "Jobs");
  console.log("1", user.fullName); // Steve Jobs
  user.firstName = "Ellie";
  console.log("1", user.fullName); // Steve Jobs
}

/**
 * @description getter
 * get과 사용될때는 get fullName()
 * 접근할때는 멤버 변수처럼 user.fullName
 */
{
  class User2 {
    firstName: string;
    lastName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`; // 호출한 시점에 결합이 가능하다!
    }

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  const user = new User2("Steve", "Jobs");
  console.log("2", user.fullName); // Steve Jobs
  user.firstName = "Ellie";
  console.log("2", user.fullName); // Ellie Jobs
}

/* private member */
{
  class User3 {
    public firstName: string;
    private lastName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  const user = new User3("Steve", "Jobs");
  console.log("3", user.fullName); // Steve Jobs
  user.firstName = "Ellie";
  console.log("3", user.fullName); // Ellie Jobs
}

/* constructor에 접근제어자(private)를 설정해두면 바로 멤버변수로 설정이 된다! */
{
  class User4 {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    constructor(public firstName: string, private lastName: string) {} // 축약 가능 ✨
  }
  const user = new User4("Steve", "Jobs");
  console.log("4", user.fullName); // Steve Jobs
  user.firstName = "Ellie";
  console.log("4", user.fullName); // Ellie Jobs

  // user.lastName = "error";
  // Property 'lastName' is private and only accessible within class 'User4'.
}

{
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 68;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
      } else this.internalAge = num;
    }
    constructor(private firstName: string, public lastName: string) {}
  }
  const user = new User("Steve", "Jobs");
  user.age = 33; // setter로 접근 가능
  console.log(user.fullName, user.age);

  // user.internalAge = 33;
  // Property 'internalAge' is private and only accessible within class 'User'.
}
