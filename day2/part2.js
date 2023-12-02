import fs from 'fs';
const sumOfPossibleGameIds = (path) => {
  const lines = fs.readFileSync(path, 'utf-8').split('\n');
  let sumMinimumPower = 0;
  lines.map((line) => {
    sumMinimumPower += powerMinimumSetOfCubes(line);
  });
  return sumMinimumPower;
};
const powerMinimumSetOfCubes = (game) => {
  let minRed = 0;
  let minGreen = 0;
  let minBlue = 0;
  const gameSetList = game
    .substring(game.indexOf(':') + 1)
    .trim()
    .split(';');
  gameSetList.map((gameSet) => {
    gameSet.split(',').map((el) => {
      if (el.includes('red') && parseInt(el) > minRed) {
        minRed = parseInt(el);
      } else if (el.includes('green') && parseInt(el) > minGreen) {
        minGreen = parseInt(el);
      } else if (el.includes('blue') && parseInt(el) > minBlue) {
        minBlue = parseInt(el);
      }
    });
  });
  return minRed*minGreen*minBlue;
};
console.log(sumOfPossibleGameIds('./input.txt'));
