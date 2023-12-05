import fs from 'fs';
const totalScratchCardsPoints = (path) => {
  const lines = fs.readFileSync(path, 'utf-8').split('\n');
  let sumOfWroth = 0;
  lines.map((line) => {
    const winningNumbers = line
      .substring(line.indexOf(':') + 1, line.indexOf('|'))
      .trim()
      .split(' ');
    const numberYouHave = line
      .substring(line.indexOf('|') + 1)
      .trim()
      .split(' ');
    sumOfWroth += cardWroth(numberYouHave, winningNumbers);
  });
  return sumOfWroth;
};
const cardWroth = (arr1,arr2) =>
{
  let winningNumbers = []
  let sum = 1;
  arr1.map(el =>
  {
    if (arr2.includes(el)&&el!=='')
    {
      winningNumbers.push(el);
    }
  })
  if (winningNumbers.length < 1)
  {
    sum= 0
  }
  else if (winningNumbers.length === 1)
  {
    sum=1
  }else
  {
    for (let i = 0; i < winningNumbers.length-1; i++) {
      sum=sum*2 
    } 
  }
  return sum
};
console.log(totalScratchCardsPoints('./input.txt'));
