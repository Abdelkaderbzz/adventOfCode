import fs from 'fs';
const sumOfPossibleGameIds = (path) => {
  const lines = fs.readFileSync(path, 'utf-8').split('\n');
  let sumIds = 0;
  lines.map((line) =>
  {
    if (isGamePossible(line)) {
      sumIds += Number(line.substring(5, line.indexOf(':')));
    }
  });
  return sumIds
};
const isGamePossible = (game) =>
{
  let res = true;
  const gameSetList = game.substring(game.indexOf(':') + 1).trim().split(';')
  gameSetList.map((gameSet) =>
  {
    gameSet.split(',').map((el) =>
    {
      if (el.includes('red')&&parseInt(el) > 12){
        res=false
      }
      else if (el.includes('green') && parseInt(el) > 13) {
        res=false
      } else if (el.includes('blue') && parseInt(el) > 14) {
        res=false
      }
    })
  })
  return res
};
console.log(sumOfPossibleGameIds('./input.txt'));
