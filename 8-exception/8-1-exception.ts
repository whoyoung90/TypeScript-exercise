/* Exception(unexpected) vs Error State(expected) */
// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000); // RangeError: Invalid array length

/* Error(Exception) Handling: try -> catch -> finally */

function readFile(fileName: string): string {
  if (fileName === "not exist!💩") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents🗒";
}

function closeFile(fileName: string) {}

function run() {
  const fileName = "not exist!💩"; // 🅰️ 에러와 관련없는 부분은 그대로 두고

  try {
    console.log(readFile(fileName)); // 🅰️ 정말 에러가 발생하는 부분만 try로 감싸주기
  } catch (error) {
    console.log(`catched!!`);
    return; // return 했음에도
  } finally {
    closeFile(fileName);
    console.log(`closed!`); // finally는 호출된다!
  }
}
run();
