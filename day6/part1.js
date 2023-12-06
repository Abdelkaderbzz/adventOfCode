import fs from 'fs';
const totalScratchCardsPoints = (path) =>
{
  const lines = fs.readFileSync(path, 'utf-8').split('\n');
}
console.log(totalScratchCardsPoints('./input.txt'));
