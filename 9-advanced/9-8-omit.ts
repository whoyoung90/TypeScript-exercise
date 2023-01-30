{
  /**
   * @description utility type - (4) Omit
   * @returns { Pick vs Omit }
   *
   * 기존의 타입에서 "원하는 속성들만 생략해서" 좀더 제한적인 타입을 만들 때 사용!
   */

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  /**
   * K extends keyof any => Pick과 달리 해당 T타입에 없는 key도 전달 가능하다. ex) others
   * Exclude<keyof T, K> => T에 있는 key들 중에, K를 제외한 아이들
   */
  type VideoMetadata = Omit<Video, "url" | "data" | "others">; // 원하는 속성들만 생략해서!

  function getVideo1(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetadata1(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
