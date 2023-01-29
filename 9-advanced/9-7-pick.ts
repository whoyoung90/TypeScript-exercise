{
  /**
   * @description utility type - (3) Pick
   * @returns { Pick vs Omit }
   *
   * 기존의 타입에서 "원하는 속성들만 뽑아서" 좀더 제한적인 타입을 만들 때 사용!
   */

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, "id" | "title">; // 원하는 속성들만 뽑아서!

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
