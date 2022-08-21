/**
 * Let's make a game 🕹
 */
const position = { x: 0, y: 0 };
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

type Direction = 'up' | 'down' | 'left' | 'right'; // Union Types 👍
/* 함수에서 별도로 값을 리턴을 하지 않는다면 (리턴이 void타입) 그냥 break;로 해주어도 되어요 :) */
function move(direction: Direction) {
  switch (direction) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    default:
      throw new Error(`unkown direction: ${direction}`);
  };
};

/* switch에서 해당 케이스 별로 값을 리턴하는 경우라면 별도로 break를 작성하지 않고, return으로 대체할 수 있어요 :) */
// function move(direction: Direction) {
//   switch (direction) {
//     case 'up':
//       return position.y += 1;
//     case 'down':
//       return position.y -= 1;
//     case 'left':
//       return position.x -= 1;
//     case 'right':
//       return position.x += 1;
//     default:
//       throw new Error(`unkown direction: ${direction}`);
//   };
// };