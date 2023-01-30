{
  /**
   * @description utility type - (5) Record
   * @returns { Record<key, value>}
   * 한 타입을 key로 쓰고, 나머지를 다른 타입으로 묶고 싶을 때 사용!
   */

  type PageInfo = {
    title: string;
  };
  type Page = "home" | "about" | "contact";

  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };
}
