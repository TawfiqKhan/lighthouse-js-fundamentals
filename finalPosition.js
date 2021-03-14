const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

finalPosition(moves);

function finalPosition(arr) {
  let x = 0;
  let y = 0;
  for (const move of arr) {
    switch (move) {
      case 'north':
        y++;
        break;
      case 'south':
        y--;
        break;
      case 'east':
        x++;
        break;
      case 'west':
        x--;
        break;
      default:
        return "wrong moves";
    }
  }
  return [x, y];
}